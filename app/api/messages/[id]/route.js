import connectDB from '../../../../config/database';
import Message from '../../../../models/Message';
import { getSessionUser } from '../../../../utils/getSessionUser';

export const dynamic = 'force-dynamic';

// PUT /api/messages/:id
export const PUT = async (request, { params }) => {
  try {
    await connectDB();

    const { id } = params;
    const sessionUser = await getSessionUser();

    if (!sessionUser || !sessionUser.user) {
      return new Response('User ID is required', {
        status: 401,
      });
    }

    const { userId } = sessionUser;
    const message = await Message.findById(id);

    if (!message) return new Response('Message Not Found', { status: 404 });

    // Verify ownership
    if (message.recipient.toString() !== userId) {
      return new Response('Unauthorized', { status: 401 });
    }

    // Update message to read/unread depending on the current status
    const { read } = await request.json();
    message.read = read;

    await message.save();

    return new Response(JSON.stringify({ read: message.read }), { status: 200 });
  } catch (error) {
    console.error('Error in PUT /api/messages/:id:', error);
    return new Response('Something went wrong', { status: 500 });
  }
};

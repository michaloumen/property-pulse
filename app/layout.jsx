import '../assets/styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: "rental, find rentals, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;

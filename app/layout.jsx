import '../assets/styles/globals.css';

export const metadata = {
  title: 'PropertyPulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: "rental, find rentals, find properties"
};

const MainLayout = ({ children }) => {
  return (
    <div>{children}</div>
  );
};

export default MainLayout;

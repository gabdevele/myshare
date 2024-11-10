import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <footer className="flex gap-8 md:gap-16 text-center mt-8 md:mt-20 mb-2 bold-font">
            <Link to="/terms" className={`text-white ${location.pathname === '/terms' ? '' : 'text-opacity-50'}`}>Terms</Link>
            <Link to="/privacy-policy" className={`text-white ${location.pathname === '/privacy-policy' ? '' : 'text-opacity-50'}`}>Privacy Policy</Link>
            <Link to="/imprint" className={`text-white ${location.pathname === '/imprint' ? '' : 'text-opacity-50'}`}>Imprint</Link>
        </footer>
    );
}

export default Footer;
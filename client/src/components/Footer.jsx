import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <footer>
            <p className="footer-option">
                <Link
                    to="/"
                    className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                    Contact Us
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
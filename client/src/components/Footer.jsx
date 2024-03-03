import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const currentPage = useLocation().pathname;

    return (
        <footer>
            <Link
                to="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>
                <p id="footer-option">Contact Us</p></Link>
        </footer>
    );
}

export default Footer;
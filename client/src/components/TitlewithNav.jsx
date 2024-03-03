import { Link, useLocation } from 'react-router-dom';

function TitlewithNav() {
    const currentPage = useLocation().pathname;

    return (
        <div className="header-nav-container">
            <div className="titles-container">
            <h1 id="sm-title">Genify</h1>
            <h2 id="sm-subtitle">a spotify playlist generator.</h2>
            </div>
            
            <Link to="/Home" className={currentPage === '/Home'}><button id="home">Home</button></Link>
        </div>
    );
}

export default TitlewithNav;
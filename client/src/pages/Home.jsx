import TitlewithNav from '../components/TitlewithNav';
import LinkSpotify from '../components/LinkSpotify';
import { Link, useLocation } from 'react-router-dom';

export default function Profile() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <TitlewithNav />
            <h3 className='h3-title'>Welcome, user</h3>
            <div className="btn-container">
                <Link to="/ViewPlaylists" className={currentPage === '/ViewPlaylists'}><button id='view-playlists'>view playlists</button></Link>
                <br />
                <Link to="/CreatePlaylist" className={currentPage === '/CreatePlaylist'}><button id='gen-playlist'>generate playlist</button></Link>
            </div>
            <LinkSpotify />
        </div>
    );
}
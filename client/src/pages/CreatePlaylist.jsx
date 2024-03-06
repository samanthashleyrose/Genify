import TitlewithNav from '../components/TitlewithNav';
import LinkSpotify from '../components/LinkSpotify';
import { Link, useLocation } from 'react-router-dom';

export default function CreatePlaylist() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <TitlewithNav />
            <div className='create-playlist-page'>
                <h3 className='h3-title'>generate a new playlist</h3>
                <h4 className='instructions'>To generate a new playlist, we have to gather some information about your interests. You may select up to 5 values total. Let's get started!</h4>
            </div>
            <div className="btn-container">
                <Link to="/SelectGenres"><button id='gen-playlist'>create a playlist</button></Link>
            </div>
        </div>
    );
}
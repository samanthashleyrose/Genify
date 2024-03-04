import HeaderwithNav from '../components/TitlewithNav';
import { Link, useLocation } from 'react-router-dom';
import SelectArtists from './SelectArtists';

export default function SelectGenres() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <HeaderwithNav />
            <div className='select-genre-page'>
                <h3 className='h3-title'>generate a new playlist</h3>
                <h4 className='instructions'>select genres:</h4>
            </div>
            <div className="gen-btn-container">
                <Link to="/CreatePlaylist" className={currentPage === '/CreatePlaylist'}><button id='back-btn'>Back</button></Link>
                <Link to="/SelectArtists" className={currentPage === '/SelectArtists'}><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}
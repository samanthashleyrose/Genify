import HeaderwithNav from '../components/TitlewithNav';
import LinkSpotify from '../components/LinkSpotify';
import { Link, useLocation } from 'react-router-dom';

export default function Profile() {
    const currentPage = useLocation().pathname;

    return (
        <div>
            <HeaderwithNav />
            <div className='create-playlist-page'>
                <h3 className='h3-title'>generate a new playlist</h3>
                {/* <LinkSpotify /> */}
                <h4 id='h4-title'>select genres:</h4>
                <div className='genres-container'>
                    here are the genres
                </div>
            </div>
            <div className="gen-btn-container">
                <Link to="/Home" className={currentPage === '/Home'}><button id='back-btn'>Back</button></Link>
                <Link to="/ChooseArtist" className={currentPage === '/ChooseArtist'}><button id='next-btn'>Next</button></Link>
            </div>
        </div>
    );
}
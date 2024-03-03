import HeaderwithNav from '../components/TitlewithNav';
import LinkSpotify from '../components/LinkSpotify';

export default function Profile() {
    return (
        <div>
            <HeaderwithNav />
            <h3 id='welcome-msg'>Welcome, user</h3>
            <div className="btn-container">
                <button id='view-playlist'>View Playlists</button>
                <br />
                <button id='gen-playlist'>Generate Playlist</button>
            </div>
            <LinkSpotify />
        </div>
    );
}
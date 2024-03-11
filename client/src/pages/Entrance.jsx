import Title from '../components/Title';
import { Link } from 'react-router-dom';

export default function Entrance() {
    return (
        <div>
            <Title />
            <div className="entrance-container">
                <Link to="/Login"><button id="login">login</button></Link>
                <br />
                <Link to="/SignUp"><button id="sign-up">sign up</button></Link>
            </div>
        </div>
    );
}
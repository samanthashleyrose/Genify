import Title from "../components/Title"
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div>
            <Title />
            <div class="login-signup-container">
                <h3 className="h3-title">login</h3>
                <form id="login-form">
                    <input id="email-input" type="text" placeholder="email" name="email" autocomplete="off" />
                    <br />
                    <input id="pass-input" type="password" placeholder="password" name="password" autocomplete="off" />
                </form>
                <div class="btn-container">
                    <Link to="/Home"><button id="login">login</button></Link>
                </div>
            </div>
        </div>
    );
}
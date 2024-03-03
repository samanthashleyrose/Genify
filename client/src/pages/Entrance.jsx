import Title from '../components/Title';

export default function Entrance() {
    return (
        <div>
            <Title />
            <div className="btn-container">
                <button id="login">login</button>
                <br />
                <button id="sign-up">sign up</button>
            </div>
        </div>
    );
}
import Title from "../components/Title"

export default function SignUp() {
    return (
        <div>
            <Title />
            <div class="login-signup-container">
                <h3 className="h3-title">sign up</h3>
                <form id="sign-up-form">
                    <input id="username-input" type="text" placeholder="username" name="username" autocomplete="off" />
                    <br />
                    <input id="email-input" type="text" placeholder="email" name="email" autocomplete="off" />
                    <br />
                    <input id="pass-input" type="password" placeholder="password" name="password" autocomplete="off" />
                </form>
                <div class="btn-container">
                    <button id="sign-up">sign up</button>
                </div>
            </div>
        </div>
    );
}
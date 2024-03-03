import Title from "../components/Title"

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
                    <button id="login">login</button>
                </div>
            </div>
        </div>
    );
}
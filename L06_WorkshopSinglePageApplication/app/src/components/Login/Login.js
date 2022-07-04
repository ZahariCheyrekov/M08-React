import { useNavigate } from 'react-router-dom';
import { login } from '../../services/requestService';

const Login = () => {
    const navigate = useNavigate();

    const loginSubmitHandler = (ev) => {
        ev.preventDefault();

        const data = new FormData(ev.currentTarget);

        const email = data.get('email');
        const password = data.get('password');

        login(email, password);
        navigate('/');
    }

    return (
        <section id="login-page" className="login">
            <form onSubmit={loginSubmitHandler} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <input className="button submit" type="submit" defaultValue="Login" />
                </fieldset>
            </form>
        </section>
    );
}

export default Login;
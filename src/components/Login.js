import '../../src/style_sheets/Login.css';
import logindude from '../../src/images/login-dude.svg';

function Login() {
    return (
        <div className="Login__container">
            <img className="Login__dudeImg" src={logindude}></img>
            <div className='Login__content'>
                <h1 className="Login__header">Welcome!</h1>
                <h2 className="Login__prompt">Sign in with Google to continue:</h2>
                <button className="Login__button"></button>
            </div>
        </div>
    );
}

export default Login;
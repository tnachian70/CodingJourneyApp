import '../../src/style_sheets/Homepage.css';
import codergirl from '../../src/images/amico.svg';
import googleIcon from '../../src/images/GoogleLogo.svg';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    // useNavigate hook returns a function that can be used in callbacks to redirect to a different path
    let navigate = useNavigate();

    let handleSignIn = () => {
        navigate('/Dashboard');
        // TODO: obviously there will be some oauth here soon this is simply for silliness
    }

    return (
        <div className='Homepage__container'>
            <h1 className="Homepage__header">Document your coding journey.</h1>
            <p className='Homepage__introPara'>Learning to code means learning to experiment. 
            Every new feature, framework, language, and library is another chance to encounter exhilarating wins and devastating failures.<br/> 
            Keep track of all of that here.</p>
            <img className='Homepage_codergirlImg' src={codergirl} />
            <button onClick={handleSignIn} className='Homepage__getStartedButton'><img className='Homepage__googleLogo' src={googleIcon} />Sign in with Google</button>
        </div>
    );
}

export default Homepage;
import '../../src/style_sheets/Homepage.css';
import codergirl from '../../src/images/amico.svg';

function Homepage() {
    return (
        <div className='Homepage__container'>
            <h1 className="Homepage__header">Document your coding journey.</h1>
            <p className='Homepage__introPara'>Learning to code means learning to experiment. 
            Every new feature, framework, language, and library is another chance to encounter exhilarating wins and devastating failures.<br/> 
            Keep track of all of that here.</p>
            <img className='Homepage_codergirlImg' src={codergirl} />
            <button className='Homepage__getStartedButton'>Get Started →</button>
        </div>
    );
}

export default Homepage;
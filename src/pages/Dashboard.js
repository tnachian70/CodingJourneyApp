import '../../src/style_sheets/Dashboard.css';
import plusImg from '../../src/images/plusButton.svg';
import thinkingImg from '../../src/images/woman-thinking2.svg';
import homeImg from '../../src/images/home-button.svg';
import favoritesImg from '../../src/images/favorites-button.svg';
import foldersImg from '../../src/images/folders-button.svg';
import notesImg from '../../src/images/notes-button.svg';

import { useNavigate } from 'react-router-dom';

function Dashboard() {
    let navigate = useNavigate();

    let handleHomeClick = () => {
        // redirect to dashboard when user clicks home button
        navigate('/Dashboard');
    }

    let handleSignOut = () => {
        // redirect to welcome/login page when user clicks sign out
        // TODO: sign them out with the oauth thing too
        navigate('/');
    }

    return (
        <div>
            <input type="text" placeholder='Search...' className="Dashboard__searchbar"></input>
            <button onClick={handleSignOut} className='Dashboard__signOutButton'>Sign Out</button>
            <h1 className="Dashboard_greetingHeader">Hi, Tamar</h1>
            <h4 className='Dashboard__greetingQuestion'>What are you learning today?</h4>
            <img className="Dashboard__thinkingImg" src={thinkingImg} />
            <div className='Dashboard__navBarContainer'>
                <div onClick={handleHomeClick} className='Dashboard__navBarElementsDiv'><img className='Dashboard__navBarHomeImg' src={homeImg} /></div>
                <div className='Dashboard__navBarElementsDiv'><img className='Dashboard__navBarFoldersImg' src={foldersImg} /></div>
                <div className='Dashboard__navBarElementsDiv'><img className='Dashboard__navBarNotesImg' src={notesImg} /></div>
                <div className='Dashboard__navBarElementsDiv'><img className='Dashboard__navBarFavoritesImg' src={favoritesImg} /></div>
            </div>
            <div className='Dashboard__contentContainer'>
                <div className='Dashboard__myFoldersContainer'>
                    <h2 className="Dashboard__folderHeader">My Folders</h2>
                    <div className="Dashboard__createFolderContainer">
                        <p className="Dashboard__createFolderPrompt">Create New Folder</p>
                        <img className="Dashboard__plusImg" src={plusImg} />
                    </div>
                </div>
                <div className='Dashboard__recentNotesContainer'>
                    <h2 className="Dashboard__recentNotesHeader">Recent Notes</h2>
                    {/* <p className="Dashboard__noRecentNotesMessage">You don't have any notes yet.</p> */}
                    <div className="Dashboard__createNoteContainer">
                        <p className="Dashboard__createNotePrompt">Create New Note</p>
                        <img className="Dashboard__plusImg" src={plusImg} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
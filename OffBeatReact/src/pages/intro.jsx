import './intro.css'
import { Link } from 'react-router-dom';

function StartIntro()
{
    return(
        <>
        <div class="introduction">
        <img src="./resources/Title.png" alt="OffBeat Title" height="350"></img>
            <h1>The Music Mafia Game!</h1>
                <div>
                <button className="PlayerButton" type="PlayerJoin"><Link to="/ClientJoin">Play Game</Link></button>

                    <br></br><br></br>
                    
                    <button className="HostButton" type="HostStart"><Link to="/StartPage">Host Game</Link></button>
                </div>
        </div>
        </>
    );
    
}

export default StartIntro;
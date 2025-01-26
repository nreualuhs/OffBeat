import './intro.css'
import { Link } from 'react-router-dom';

function StartIntro()
{
    return(
        <>
        <div class="introduction">
        <img src="./resources/Title.png" alt="OffBeat Title" height="350"></img>
            <h1>Pick A Choice</h1>
                <div>
                    <Link to="/ClientJoin">Play Game</Link>

                    <br></br><br></br>
                    
                    <Link to="/StartPage">Host Game</Link>
                </div>
        </div>
        </>
    );
    
}

export default StartIntro;
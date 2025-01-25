import './app.css'
import { Link } from 'react-router-dom';

function StartIntro()
{
    return(
        <>
        <div  class="introduction">
            <h1>Offbeat</h1>
            <h2>Pick A Choice</h2>
                <div>
                    <Link to="/StartPage">Play Game</Link>

                    <br></br><br></br>
                    
                    <Link to="/TimerPage">Host Game</Link>
                </div>
        </div>
        </>
    );
    
}

export default StartIntro;
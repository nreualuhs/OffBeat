import { Link } from 'react-router-dom';
import "./JoinGame.css";

function JoinGame() {
    return(
        <>
            <div className="container">
            <img src="./resources/Title.png" alt="OffBeat Title" height="340"></img>
            <br></br>
            <button><Link to="/TimerPage">Start Game</Link></button>
            <h2 className="header2">Who's in?</h2>
            <div>
                <ul className="List">
                    <li>name 1</li>
                    <li>name 2</li>
                    <li>name 3</li>
                </ul>
            </div>
            </div>
        </>
    );
}

export default JoinGame
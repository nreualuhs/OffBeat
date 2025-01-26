import { Link } from 'react-router-dom';
import socket from './StartPage';
function JoinGame() {
    console.log(socket)
    return(
        <>
            <h1>OffBeat</h1>
            <Link to="/TimerPage">PLAY GAME</Link>
            <h2>Look who joined!</h2>
            <div>
                <ul>
                    <li>Empty</li>
                    <li>Empty</li>
                    <li>Empty</li>
                </ul>
            </div>
            
        </>
    );
}

export default JoinGame
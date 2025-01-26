import { Link } from 'react-router-dom';
function JoinGame() {
    return(
        <>
            <h1>OffBeat</h1>
            <Link to="/TimerPage">PLAY GAME</Link>
            <h2>Look who joined!</h2>
            <div>
                <ul>
                    <li>name 1</li>
                    <li>name 2</li>
                    <li>name 3</li>
                </ul>
            </div>
            
        </>
    );
}

export default JoinGame
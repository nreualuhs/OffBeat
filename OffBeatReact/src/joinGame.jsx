import { useContext, useEffect } from 'react';
import { PlayerContext } from './PlayerContext';
import { Link } from 'react-router-dom';

function JoinGame() {
    const { players } = useContext(PlayerContext);
    console.log("Players in JoinGame:", players);

    //log when players array updates
    useEffect(() => {
        console.log('Players updated in Join Game: ', players);
    }, [players]);
    
    return(
        <>
            <h1>OffBeat</h1>
            <Link to="/Timer">PLAY GAME</Link>
            <h2>Look who joined!</h2>
            <div>
                <ul>
                    {
                        players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    );
}

export default JoinGame
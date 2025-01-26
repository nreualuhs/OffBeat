import { useContext, useEffect } from 'react';
import { PlayerContext } from './PlayerContext';
import { Navigate, useNavigate } from 'react-router-dom';

function JoinGame({socket}) {
    const navigate = useNavigate()
    const { players, addPlayer } = useContext(PlayerContext);
    console.log("Players in JoinGame:", players);

    //log when players array updates
    /*
    useEffect(() => {
        console.log('Players updated in Join Game: ', players);
    }, [players]);*/
    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.event === "join") {
                    addPlayer(data.message);
                }
            };
        }

        return () => {
            if (socket) {
                socket.onmessage = null; // Cleanup to avoid memory leaks
            }
        };
    }, [socket, addPlayer]);

    function playGame() {    
        socket.send(JSON.stringify({"event": "play", "message": ""}))
        navigate('/TimerPage')
    }
    
    return(
        <>
            <h1>OffBeat</h1>
            <button onClick={playGame}>PLAY GAME</button>
            <h2>Look who joined!</h2>
            <div>
                <ul>
                    {players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))
                    }
                </ul>
            </div>
            
        </>
    );
}

export default JoinGame
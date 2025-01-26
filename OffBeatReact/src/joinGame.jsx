import { useContext, useEffect } from 'react';
import { PlayerContext } from './PlayerContext';
import { Navigate, useNavigate } from 'react-router-dom';

function JoinGame({socket}) {
    const { players } = useContext(PlayerContext);
    console.log("Players in JoinGame:", players);
    const navigate = useNavigate()

    //log when players array updates
    useEffect(() => {
        console.log('Players updated in Join Game: ', players);
    }, [players]);
    function play(){
        socket.send(JSON.stringify({"type": "start", message: ""}))
        navigate('/TimerPage')
    }
    return(
        <>
            <h1>OffBeat</h1> 
            <button type="button" id="joinbtn" onClick={play}>
                PLAY GAME
            </button>
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
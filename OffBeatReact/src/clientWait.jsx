import './app.css';
import { useNavigate } from 'react-router-dom';
import { PlayerContext } from './PlayerContext';
import { useContext, useEffect } from 'react';

function ClientWait({ socket }) {
    const { players, addPlayer, setPlayers } = useContext(PlayerContext); // Include `players`
    const navigate = useNavigate();

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                if (data.event === "players") {
                    // Initialize the player list with existing players
                    setPlayers(data.message);
                } else if (data.event === "join") {
                    addPlayer(data.message);
                }
            };
        }

        return () => {
            if (socket) {
                socket.onmessage = null; // Cleanup to avoid memory leaks
            }
        };
    }, [socket, addPlayer, setPlayers]);

    return (
        <>
            <div className="clientWait">
                <h1>Offbeat</h1>
                <br />
                <h2>You're In! Who else is waiting with you?</h2>
            </div>
            <div>
                <ul>
                    {players.map((player, index) => (
                        <li key={index}>{player}</li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ClientWait;
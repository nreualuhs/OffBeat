import { useState, useContext } from 'react';
import { PlayerContext } from './PlayerContext';//import player context
import { Navigate, useNavigate } from 'react-router-dom';

function StartClient({socket}) {
    const { addPlayer } = useContext(PlayerContext);
    const navigate = useNavigate()

    function clientJoin() {
        const inputName = document.getElementById("username").value;
        if (inputName) {
            // Create WebSocket connection
            // const newSocket = new WebSocket('ws://localhost:5000');

            // Set WebSocket in state
            // setSocket(newSocket);

            // Connection opened
            socket.send(JSON.stringify({"type": "join", message: inputName}))

            navigate('/JoinGame')

            socket.addEventListener('open', () => {
                console.log(`${inputName} connected to the WS Server!`);
                // socket.send(JSON.stringify({join: inputName}));//send username
                
            });

            
            socket.addEventListener('message', (event) => {
              console.log(`${event.data} MESSAGE RECEIVED`);
              const decode = JSON.parse(event.data);
              console.log(decode);
              console.log(decode.message);
              addPlayer(decode.message);
              // socket.send(JSON.stringify({join: inputName}));//send username
            });

            // Connection closed
            socket.addEventListener('close', () => {
                console.log(`${inputName} disconnected from the WS Server!`);
            });
        } else {
            document.getElementById("error-repeat").textContent = "Please enter a valid name!";
        }
    }

    return (
        <div className="clientJoin">
            <h1>Offbeat</h1>
            <label htmlFor="username">Enter your name</label>
            <input type="text" id="username" name="username" placeholder="John/Jane Doe" />
            <p id="error-repeat" style={{ color: 'red' }}></p>
            <button type="button" id="joinbtn" onClick={clientJoin}>
                Join
            </button>
        </div>
    );
}

export default StartClient;
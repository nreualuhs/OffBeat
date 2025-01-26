import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function StartClient() {
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate()

    function clientJoin() {
        const inputName = document.getElementById("username").value;
        if (inputName) {
            // Create WebSocket connection
            const newSocket = new WebSocket('ws://localhost:5000');

            // Set WebSocket in state
            setSocket(newSocket);

            // Connection opened
            newSocket.addEventListener('open', () => {
                console.log(`${inputName} connected to the WS Server!`);
                const data = {"event": "join", "name": inputName};
                const jsonData = JSON.stringify(data);
                newSocket.send(jsonData);
            });

            // Connection closed
            newSocket.addEventListener('close', () => {
                console.log(`${inputName} disconnected from the WS Server!`);
                const data = {"event": "disc", "name": inputName};
                const jsonData = JSON.stringify(data);
                newSocket.send(jsonData);
            });

            newSocket.addEventListener('message', function(event) {
                console.log("ALLALALA");    
                const message = JSON.parse(event.data);
                if (message["event"] == "join" ){
                    console.log(`${message["name"]} connected to the WS Server!`)
                }
            });
            // navigate('/JoinGame')

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
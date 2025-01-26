import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';

function StartPage() {
    const [socket, setSocket] = useState(null);
    const navigate = useNavigate()

    function host() {
        const inputName = document.getElementById("username").value;
        if (inputName) {
            // Create WebSocket connection
            const newSocket = new WebSocket('ws://localhost:5000');

            // Set WebSocket in state
            setSocket(newSocket);

            // Connection opened
            newSocket.addEventListener('open', () => {
                console.log(`${inputName} connected to the WS Server!`);
                console.log(`${inputName} is the game master and is creating the room!`);
                
                const data = {"event": "create", "name": inputName};
                const jsonData = JSON.stringify(data);
                newSocket.send(jsonData);
            });

            // Connection closed
            newSocket.addEventListener('close', () => {
                console.log(`${inputName} disconnected from the WS Server!`);
            });

            document.getElementById("error-repeat").textContent = "";
            navigate('/JoinGame')

        } else {
            document.getElementById("error-repeat").textContent = "Please enter a valid name!";
        }
    }
    
    return(
        <div>
            <h1>Welcome to OffBeat!</h1>
            <h2>You are the Game Master</h2>
            <label htmlFor="username">Enter your name: </label>
            <input type="text" id="username" name="username" placeholder="John/Jane Doe" />
            <p id="error-repeat" style={{ color: 'red' }}></p>
            <button onClick={host}> Start </button> 
        </div>
    );
}

export default StartPage
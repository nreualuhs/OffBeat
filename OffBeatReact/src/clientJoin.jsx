import { useState } from 'react';

function StartClient() {
    const [socket, setSocket] = useState(null);

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
                newSocket.send({"join": inputName});
            });

            // Connection closed
            newSocket.addEventListener('close', () => {
                console.log(`${inputName} disconnected from the WS Server!`);
            });
        } else {
            document.getElementById("error-repeat").textContent = "Please enter a valid name!";
        }
    }

    return (
        <div className="clientJoin">
            <img src="./resources/Title.png" alt="OffBeat Title" height="250"></img>
            <br></br>
            <label htmlFor="username">Enter your name</label>
            <br></br>
            <input type="text" id="username" name="username" placeholder="John/Jane Doe" />
            <p id="error-repeat" style={{ color: 'red' }}></p>
            <button type="button" id="joinbtn" onClick={clientJoin}>
                Join
            </button>
        </div>
    );
}

export default StartClient;
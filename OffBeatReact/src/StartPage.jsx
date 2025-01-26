import { Link } from 'react-router-dom';
function StartPage() {
    const [socket, setSocket] = useState(null);
    
    function clientJoin() {
        const inputName = document.getElementById("username").value;
        if (inputName) {
            // Create WebSocket connection
            const socket = new WebSocket('ws://localhost:5000');

            // Set WebSocket in state
            setSocket(socket);

            // Connection opened
            socket.addEventListener('open', () => {
                console.log(`${inputName} connected to the WS Server!`);
            });

            // Connection closed
            socket.addEventListener('close', () => {
                console.log(`${inputName} disconnected from the WS Server!`);
            });
            socket.send({"join": inputName})
        } else {
            document.getElementById("error-repeat").textContent = "Please enter a valid name.";
        }
    }
    return(
        <div>
            <h1>Welcome to OffBeat!</h1>
            <h2>Instructions: find the imposter who is listening to different music!</h2>
            <Link to="/JoinGame">START</Link>
        </div>
    );
}

export default StartPage
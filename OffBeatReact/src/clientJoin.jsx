import { Link } from 'react-router-dom';

function StartClient() {
    return(
            <div class="clientJoin">
                <h1>Offbeat</h1>

                <label for="gamecode">Enter the Game Code</label>
                <input type="number" id="gamecode" name="gamecode" placeholder="12345"></input>
                <br></br><br></br>
                <label for="username">Enter your name</label>
                <input type="text" id="username" name="username" placeholder="John/Jane Doe"></input>
                <br></br><br></br>
                <Link to="/ClientWait">Join</Link>
            </div>
    );
}

export default StartClient;
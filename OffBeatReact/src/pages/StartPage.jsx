import { Link } from 'react-router-dom';
import "./StartPage.css"


function StartPage() {
    
    return(
        <div class="start">
            <img src="./resources/Title.png" alt="OffBeat Title" height="350"></img>
            <h2 class="instrutions">Instructions: find the imposter who is listening to different music!</h2>
            <Link to="/JoinGame">START</Link>
        </div>
    );
}

export default StartPage
import { Link } from 'react-router-dom';
function StartPage() {
    return(
        <div>
            <h1>Welcome to OffBeat!</h1>
            <h2>Instructions: find the imposter who is listening to different music!</h2>
            <Link to="/JoinGame">START</Link>
        </div>
    );
}

export default StartPage
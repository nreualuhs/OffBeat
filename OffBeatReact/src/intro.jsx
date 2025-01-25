import './app.css'

function StartIntro()
{
    return(
        <>
        <div  class="introduction">
            <h1>Offbeat</h1>
            <h2>Pick A Choice</h2>
                <div>
                    <button type="button" name="client" id="name">Host Game</button>
                    <br></br><br></br>
                    <button type="button" name="server" id="server">Play Game</button>
                </div>
        </div>
        </>
    );
    
}

export default StartIntro;
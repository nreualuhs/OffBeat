


import React, { useState, useEffect } from 'react'
import './App.css';
// import StartClient from './clientJoin.jsx'
// import Timer from './TimerPage.jsx'
// import StartIntro from './intro.jsx'
// import ClientJoin from './clientJoin.jsx'
// import ClientWait from './clientWait.jsx'
// import ImposterDance from './imposterDance.jsx'
// import ImposterWin from './imposterWin.jsx'
// import RegularDance from './regularDance.jsx'
// import RegularWin from './RegularWin.jsx'
// import JoinGame from './joinGame.jsx'
// import StartPage from './StartPage.jsx'
import Login from './Login.jsx'
import {loginUrl} from '../server/spotify'

import { Route, Routes } from 'react-router-dom'

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {

    async function getToken() {
      // try {
      const response = await fetch('/auth/token');
      const json = await response.json();
      console.log(json); // Log the response to see what you get
      setToken(json.access_token);
      // } catch (error) {
      //   console.error('Error fetching token:', error);
      // }
    }

    getToken();

  }, []);
  /*
  const [client, setClient] = useState(null)
  useEffect(() => {
    console.log("Hello from use Effect")
    // Create WebSocket connection.
    const socket = new WebSocket('ws://localhost:5000');

    // Connection opened
    socket.addEventListener('open', function (event) {
        console.log('Connected to the WS Server!')
    });

    // Connection closed
    socket.addEventListener('close', function (event) {
        console.log('Disconnected from the WS Server!')
    });

    // Listen for messages
    socket.addEventListener('message', function (event) {
        console.log('Message from server ', event.data);
    });
    // Send a msg to the websocket
    const sendMsg = () => {
        socket.send('Hello from Client!');}
    setClient(socket)
  }, [])*/

 return(
    <>
      <a href={loginUrl} id = "signInButton">Sign in with Spotify!</a>
        { (token === '') ? <Login/> : <WebPlayback token={token} /> }
    </>
  // <Routes>
  //   <Route path="/" element={<StartIntro />} />
  //   <Route path="/TimerPage" element={<Timer textDisplay={"The imposter is..."}/>} />
  //   <Route path="/clientWait" element={<ClientWait />} />
  //   <Route path="/imposterDance" element={<ImposterDance />} />
  //   <Route path="/imposterWin" element={<ImposterWin />} />
  //   <Route path="/regularDance" element={<RegularDance />} />
  //   <Route path="/regularWin" element={<RegularWin />} />
  //   <Route path="/clientJoin" element={<ClientJoin />} />
  //   <Route path="/joinGame" element={<JoinGame />} />
  //   <Route path="/StartPage" element={<StartPage />} />
  // </Routes>
 );
 
}

export default App

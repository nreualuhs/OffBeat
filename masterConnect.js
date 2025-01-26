import { Server } from "socket.io";

const io = new Server(8080);

io.on("connection", (socket) => {
  console.log("A client has connected");

  socket.on("disconnect", () => {
    console.log("A client has disconnected");
  });
});




/*const http = require('http');
const { Server } = require('socket.io');

// Create an HTTP server
const server = http.createServer();

// Attach Socket.IO to the server
const io = new Server(server);

// Listen on port 5000
server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});

io.on('connection', (socket) => {
    console.log('A player connected');

    // Join a room (game room is 'room1' here, this can be dynamic)
    socket.on('join_game', (room, username) => {
        socket.join(room);

        console.log(`${username} joined room: ${room}`);

        const roomPlayers = io.sockets.adapter.rooms.get(room);

        //broadcast to others in room
        socket.to(room).emit("player_joined", `${username} has joined the Game.`);

        // When all 3 players have joined, assign roles
        if (roomPlayers.size === 3) {
            const players = Array.from(roomPlayers);  // Get player IDs in the room
            const imposterIndex = Math.floor(Math.random() * 3); // Randomly choose the imposter (0, 1, or 2)

            // Define your song list (You can get songs from an API or hardcode them)
            const regularSong = 'song1.mp3';
            const imposterSong = 'song2.mp3';

            // Assign songs to players
            players.forEach((player, index) => {
                const song = (index === imposterIndex) ? imposterSong : regularSong;
                const role = (index === imposterIndex) ? 'imposter' : 'regular';

                // Emit the assigned song and role to each player
                io.to(player).emit('start_game', {
                    role, song
                });
            });
        }
    });

    socket.on('disconnect', () => {
        console.log('A player disconnected');
    });
});

const axios = require('axios');

const getSongPreview = async (trackId) => {
    try {
        const response = await axios.get(`https://api.spotify.com/v1/tracks/${trackId}`, {
            headers: {
                'Authorization': `Bearer ${YOUR_SPOTIFY_ACCESS_TOKEN}` // Your OAuth token here
            }
        });

        // Spotify returns a preview_url for each track which is a short clip (usually ~30 seconds)
        return response.data.preview_url;
    } catch (error) {
        console.error('Error fetching song from Spotify:', error);
        throw new Error('Failed to fetch song preview');
    }
};

io.on('connection', (socket) => {
    console.log('A player connected');

    // Call the Spotify API to get the song preview
    const songId = 'spotify-track-id';  // Example: "4uLU6hMCjMI75M1A2B6H4T" (replace with your track ID)
    getSongPreview(songId).then((previewUrl) => {
        socket.emit('play_song', { songUrl: previewUrl });
    });

    socket.on('disconnect', () => {
        console.log('A player disconnected');
    });
});*/
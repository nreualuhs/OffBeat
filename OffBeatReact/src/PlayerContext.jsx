import React, { createContext, useState } from 'react';

export const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [players, setPlayers] = useState([]);

    const addPlayer = (player) => {
        console.log(`Adding player: ${player}`);
        setPlayers((prev) => {
        const newPlayers = [...prev, player];
        console.log('Updated players:', newPlayers); // Logs the updated array
        return newPlayers;
    });
    };

    return (
        <PlayerContext.Provider value={{ players, addPlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}
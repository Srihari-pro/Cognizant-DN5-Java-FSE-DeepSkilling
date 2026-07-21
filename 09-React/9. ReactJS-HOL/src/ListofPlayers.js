import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat", score: 90 },
        { name: "Rohit", score: 85 },
        { name: "Gill", score: 60 },
        { name: "Rahul", score: 72 },
        { name: "Pant", score: 45 },
        { name: "Hardik", score: 80 },
        { name: "Jadeja", score: 65 },
        { name: "Ashwin", score: 78 },
        { name: "Bumrah", score: 55 },
        { name: "Shami", score: 68 },
        { name: "Siraj", score: 75 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score Below 70</h3>

            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

        </div>
    );
}

export default ListofPlayers;
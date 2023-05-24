import React, { useState } from "react";
import Tile from "./tile.jsx";

const GameView = ({
  playerOneName,
  playerOneWeapon,
  playerTwoName,
  playerTwoWeapon
}) => {
  const [gameboard, setGameboard] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ]);
  const [turn, setTurn] = useState(playerOneWeapon);
  const [winner, setWinner] = useState(null);

  const updateBoard = (loc) => {
    if (gameboard[loc] === playerOneWeapon || gameboard[loc] === playerTwoWeapon || winner) {
      return;
    }

    const currentGameboard = [...gameboard];
    currentGameboard.splice(loc, 1, turn);
    setGameboard(currentGameboard);

    const winningPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
      [0, 4, 8], [2, 4, 6] // Diagonales
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (currentGameboard[a] && currentGameboard[a] === currentGameboard[b] && currentGameboard[a] === currentGameboard[c]) {
        setWinner(turn);
        return;
      }
    }

    setTurn(turn === playerOneWeapon ? playerTwoWeapon : playerOneWeapon);
  };

  const resetBoard = () => {
    setGameboard([
      "", "", "",
      "", "", "",
      "", "", ""
    ]);
    setTurn(playerOneWeapon);
    setWinner(null);
  };

  const renderTiles = () => {
    return gameboard.map((value, i) => (
      <Tile key={i} loc={i} value={value} updateBoard={updateBoard} turn={turn} />
    ));
  };

  const getWinnerAnnouncement = () => {
    if (winner === "draw") {
      return "It's a draw!";
    } else if (winner) {
      const winnerName = winner === playerOneWeapon ? playerOneName : playerTwoName;
      return `${winnerName} wins!`;
    } else if (!gameboard.includes("")) {
      return "It's a draw!";
    }
    return null;
  };

  return (
    <div>
      <div className="board">{renderTiles()}</div>
      <div className="row text-center text-light">
        <div className="winner-announcement">{getWinnerAnnouncement()}</div>
      </div>
      <div className="row d-flex justify-content-center">
        <button className="btn m-2 text-light rounded-0 buttonColor buttonRestartColor" onClick={resetBoard}>Reset</button>
      </div>
    </div>
  );
};

export default GameView;

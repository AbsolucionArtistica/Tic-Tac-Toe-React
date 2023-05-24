import React, { useState } from "react";
import GameView from "./gameView.jsx";

export const Lobby = () => {
  const [playerOne, setPlayerOne] = useState("");
  const [playerTwo, setPlayerTwo] = useState("");
  const [playerOneWeapon, setPlayerOneWeapon] = useState("");
  const [showGameView, setShowGameView] = useState(false);

  const handlePlayerOneWeapon = (weapon) => {
    setPlayerOneWeapon(weapon);
  };

  const setPlayerOneName = (e) => {
    setPlayerOne(e.target.value);
  };

  const setPlayerTwoName = (e) => {
    setPlayerTwo(e.target.value);
  };

  const handleStartClick = () => {
    setShowGameView(true);
  };

  const renderMainScript = () => {
    return (
      <div className="col-8 mainContainer">
        <div className="row row-cols-1 menuLobby rounded-1 my-5 w-100" id="mainRow">
          <div className="col my-3 d-flex justify-content-center">
            <h1 className="text-light">CHOOSE YOUR WEAPON</h1>
          </div>
          <div className="col my-3 d-flex justify-content-center">
            <input
              placeholder="Player One username"
              value={playerOne}
              onChange={setPlayerOneName}
              type="text"
              id="playerOneName"
              name="playerOneName"
            />
            <input
              placeholder="Player Two username"
              value={playerTwo}
              onChange={setPlayerTwoName}
              type="text"
              id="playerTwoName"
              name="playerTwoName"
            />
          </div>
          <div className="col my-3 d-flex justify-content-evenly">
            <button
              className="btn rounded-0 buttonColor"
              onClick={() => handlePlayerOneWeapon("X")}
              id="buttonX"
              type="button"
            >
              <i className="fa-solid fa-x"></i>
            </button>
            <button
              className="btn text-light rounded-0 buttonColor buttonStartColor"
              id="startButton"
              onClick={handleStartClick}
            >
              Start
            </button>
            <button
              className="btn rounded-0 buttonColor"
              onClick={() => handlePlayerOneWeapon("O")}
              id="buttonO"
              type="button"
            >
              <i className="fa-regular fa-circle"></i>
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="row d-flex justify-content-center">
      {!showGameView && renderMainScript()}
      {showGameView && (
        <GameView
          playerOneName={playerOne}
          playerOneWeapon={playerOneWeapon}
          playerTwoName={playerTwo}
          playerTwoWeapon={playerOneWeapon === "X" ? "O" : "X"}
        />
      )}
    </div>
  );
};

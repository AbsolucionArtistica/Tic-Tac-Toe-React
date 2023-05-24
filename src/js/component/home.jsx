import React from "react";

//include images into your bundle
import { Lobby } from "./lobby.jsx";
import GameView from "./gameView.jsx";

//create your first component
const Home = () => {
	return (
		<>
		<div className="fs-1 mb-4 text-white d-flex justify-content-center">Tic Tac Toe in React.js</div>
		<Lobby/>
		</>
	);
};

export default Home;

import React, { useState } from "react";

const Lobby = () => {

    const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, setPlayerTwo] = useState("")

    return(
    <div className="row d-flex justify-content-center">
        <div className="col-8">
            <div className="row row-cols-1 menuLobby rounded-1 my-5 w-100">
                <div className="col my-3 d-flex justify-content-center">
                    <h1 className="text-light">CHOSEE YOUR WEAPON</h1>
                </div>
                <div className="col my-3 d-flex justify-content-center">
                    <input placeholder="Player One username" value={playerOne} type="text" id="playerOneName" name="playerOneName"/>
                    <input placeholder="Player One username" value={playerTwo} type="text" id="playerTwoName" name="playerTwoName"/>
                </div>
                <div className="col my-3 d-flex justify-content-evenly">
                    <button class="btn rounded-0 buttonColor" id="buttonX" type="button"><i class="fa-solid fa-x"></i></button>
                    <button class="btn rounded-0 buttonColor" id="buttonO" type="button"><i class="fa-regular fa-circle"></i></button>
                </div>
            </div>
        </div>
    </div>

    )

    

}
export default Lobby
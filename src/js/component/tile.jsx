import React from "react";

const Tile = ({ loc, value, updateBoard, turn }) => {
  const handleClick = () => {
    updateBoard(loc, turn);
  };

  return (
    <button className="tile" onClick={handleClick}>
      {value}
    </button>
  );
};

export default Tile;

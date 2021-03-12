import React from "react";

const Card = ({ image, id, active, handleClick, memorySuccess }) => {
  return !memorySuccess ? (
    <div
      id={id}
      className={!active ? "card" : "card-active"}
      onClick={() => handleClick(id)}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={image} alt="img" />
        </div>
      </div>
    </div>
  ) : (
    <div className="card-success"></div>
  );
};
export default Card;

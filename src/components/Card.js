import React from "react";

const Card = ({ image, id, isActive, handleClick }) => {
  return (
    <div
      id={id}
      className={!isActive ? "card" : "card-active"}
      onClick={handleClick}
    >
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back">
          <img src={image} alt="img" />
        </div>
      </div>
    </div>
  );
};
export default Card;

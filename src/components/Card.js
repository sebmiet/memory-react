import React from "react";

const Card = ({ image }) => {
  return (
    <div className="card">
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

import React from "react";

import Card from "./Card";
import Images from "./Images";

const Cards = () => {
  const cards = [];
  const images = [...Images];
  for (let i = 0; i <= 23; i++) {
    let image;
    if (i > 11) {
      image = images[i - 12];
    } else {
      image = images[i];
    }
    cards.push(<Card key={i} image={image} />);
  }

  return <div className="cards-container">{cards}</div>;
};

export default Cards;

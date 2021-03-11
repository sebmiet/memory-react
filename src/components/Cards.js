import React, { useState, useEffect } from "react";

import Card from "./Card";
import Images from "./Images";

const Cards = () => {
  const [cards, setCards] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const images = [...Images];
    const newCards = [];
    for (let i = 0; i <= 19; i++) {
      let image;
      if (i > 11) {
        image = images[i - 12];
      } else {
        image = images[i];
      }
      newCards.push(
        <Card
          key={i}
          id={i}
          image={image}
          isActive={isActive}
          handleClick={handleClick}
        />
      );
    }
    setCards([...cards, newCards]);
  }, [cards, isActive]);

  const handleClick = (id) => {
    const newCards = cards.map((item) => {
      return item.id === id && setIsActive(true);
    });
    setCards(newCards);
  };

  //this logic is building cards board with random images i random places

  return <div className="cards-container">{cards}</div>;
};

export default Cards;

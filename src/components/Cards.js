import React, { useState, useEffect } from "react";

import Card from "./Card";
import Images from "./Images";

const Cards = () => {
  const [cards, setCards] = useState(
    [...Array(20)].map((card) => {
      card = {
        id: Math.floor(Math.random() * 10000),
        active: false,
        image: Images[Math.floor(Math.random() * 12)],
        memorySuccess: false,
      };
      return card;
    })
  );

  const handleClick = (id) => {
    const newCards = cards.map((card) => {
      if (card.id === id) {
        card.active = true;
      }
      return card;
    });
    setCards(newCards);

    checkImages(newCards);
  };

  const checkImages = (cardsArray) => {
    let activeCards = [];
    const updatedCards = [...cardsArray].map((card) => {
      if (card.active === true) {
        activeCards.push(card);
        if (activeCards.length === 3) {
          if (activeCards[0].image === activeCards[1].image) {
            activeCards[1].memorySuccess = true;
            activeCards[2].memorySuccess = true;
            console.log("sukces");
          } else activeCards[0].active = false;
          activeCards[1].active = false;
          activeCards[2].active = false;
        }
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <div className="cards-container">
      {cards.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            image={card.image}
            active={card.active}
            handleClick={handleClick}
            memorySuccess={card.memorySuccess}
          />
        );
      })}
    </div>
  );
};

export default Cards;

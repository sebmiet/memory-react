import React, { useState, useEffect } from "react";

import Card from "./Card";
import Images from "./Images";

const Cards = ({ setCounter }) => {
  const [activeCards, setActiveCards] = useState([]);
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState(
    [...Array(24)].map((card, index) => {
      card = {
        id: Math.floor(Math.random() * 10000),
        active: false,
        memorySuccess: false,
      };
      return card;
    })
  );

  useEffect(() => {
    imagesDraw(Images);
  }, []);

  useEffect(() => {
    checkActiveCards(activeCards);
  }, [activeCards, cards]);

  const imagesDraw = (images) => {
    console.log(images);
    let newImages = [];
    while (newImages.length < cards.length / 2) {
      let index = Math.floor(Math.random() * images.length);
      newImages.push(images[index]);
      images.splice(index, 1);
    }
    let pairImages = [...newImages];
    newImages = pairImages.concat(newImages);
    let drawedImages = newImages.sort(() => 0.5 - Math.random());

    console.log(drawedImages);
    setImages(drawedImages);
  };

  const handleClick = (id) => {
    if (activeCards.length === 2) return;
    const newCards = cards.map((card) => {
      if (card.id === id) card.active = true;
      return card;
    });
    setCards(newCards);
    const newActiveCards = newCards.filter((card) => card.active === true);
    setActiveCards(newActiveCards);
  };

  const checkImages = (cardsArray) => {
    let activeCards = [];
    let activeCardsIndex = [];
    const updatedCards = [...cardsArray].map((card, index) => {
      if (card.active === true) {
        activeCards.push(card);
        activeCardsIndex.push(index);
        console.log(activeCards);
        if (activeCards.length === 2) {
          const image1 = images[activeCardsIndex[0]];
          const image2 = images[activeCardsIndex[1]];
          if (image1 === image2) {
            activeCards[0].memorySuccess = true;
            activeCards[1].memorySuccess = true;
          }
          activeCards[0].active = false;
          activeCards[1].active = false;
          setCounter((preValue) => preValue + 1);
        }
      }
      return card;
    });
    setActiveCards([]);
    setCards(updatedCards);
  };

  const checkActiveCards = (activeCards) => {
    if (activeCards.length > 1) {
      setTimeout(() => {
        checkImages(cards);
      }, 1000);
    } else return;
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => {
        console.log(images[index]);
        return (
          <Card
            key={card.id}
            id={card.id}
            image={images[index]}
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

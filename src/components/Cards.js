import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import Card from "./Card";
import Images from "./Images";
import cardFlip from "/home/sebmiet/workspace/CRA/my-apps/memory-react/src/sounds/card-flip.wav";
import ping from "/home/sebmiet/workspace/CRA/my-apps/memory-react/src/sounds/ping.wav";

const Cards = ({ setCounter, setSuccess, setWin }) => {
  const [activeCards, setActiveCards] = useState([]);
  const [images, setImages] = useState([]);
  const [cards, setCards] = useState(
    [...Array(8)].map((card, index) => {
      card = {
        id: index,
        active: false,
        memorySuccess: false,
      };
      return card;
    })
  );
  const [play] = useSound(cardFlip);
  const [playPing] = useSound(ping);

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
    play(cardFlip);
    const newCards = cards.map((card) => {
      if (card.id === id) card.active = true;
      return card;
    });
    setCards(newCards);
    setSuccess(false);
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
            playPing();
            setSuccess(true);
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
    checkForWin(updatedCards);
  };

  const checkForWin = (cards) => {
    let newCards = cards.filter((card) => card.memorySuccess === false);
    newCards.length === 0 && setWin(true);
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

import Cards from "./Cards";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import GameInfo from "./GameInfo";
import bgMusic from "/home/sebmiet/workspace/CRA/my-apps/memory-react/src/sounds/tavern.wav";

function App() {
  const [counter, setCounter] = useState(0);
  const [success, setSuccess] = useState(false);
  const [win, setWin] = useState(false);
  const [playMusic, { isPlaying }] = useSound(bgMusic);

  useEffect(() => {
    if (!isPlaying) playMusic();
  }, [isPlaying]);

  return (
    <div className="app">
      <Cards setCounter={setCounter} setSuccess={setSuccess} setWin={setWin} />
      <GameInfo counter={counter} success={success} win={win} />
    </div>
  );
}

export default App;

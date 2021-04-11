import Cards from "./Cards";
import { useState } from "react";
import GameInfo from "./GameInfo";
function App() {
  const [counter, setCounter] = useState(0);
  const [success, setSuccess] = useState(false);
  const [win, setWin] = useState(false);

  return (
    <div className="app">
      <Cards setCounter={setCounter} setSuccess={setSuccess} setWin={setWin} />
      <GameInfo counter={counter} success={success} win={win} />
    </div>
  );
}

export default App;

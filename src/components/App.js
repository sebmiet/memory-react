import Cards from "./Cards";
import { useState } from "react";
import GameInfo from "./GameInfo";
function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">
      <Cards setCounter={setCounter} />
      <GameInfo counter={counter} />
    </div>
  );
}

export default App;

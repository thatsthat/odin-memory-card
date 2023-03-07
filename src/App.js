import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const [score, setScore] = useState();
  const [clickedFlags, setClickedFlags] = useState();

  useEffect(() => {
    // Initialize clicked flags as an empty array
    setClickedFlags([]);
  }, []);

  const clickCardFunc = (event) => {
    const flag = event.currentTarget.firstChild.getAttribute("code");
    if (clickedFlags.includes(flag)) {
    }
  };

  return (
    <div className="App">
      <Deck clickCard={clickCardFunc} />
    </div>
  );
}

export default App;

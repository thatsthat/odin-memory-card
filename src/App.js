import React, { useState, useEffect } from "react";
import Deck from "./components/Deck";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  const nFlags = 15;
  const [score, setScore] = useState();
  const [clickedFlags, setClickedFlags] = useState([]);
  const [counter, setCounter] = useState(0);
  const [flagSeq, setFlagSeq] = useState();
  const [flagData, setFlagData] = useState();

  const randFlags = (numFlags, maxInt) => {
    // You can take this value from user
    const n = 5;

    // Initial empty array
    const arr = [];

    // Null check
    if (n === 0) {
      console.log(null);
    }

    do {
      // Generating random number
      const randomNumber = Math.floor(Math.random() * maxInt);
      // Pushing into the array only
      // if the array does not contain it
      if (!arr.includes(randomNumber)) {
        arr.push(randomNumber);
      }
    } while (arr.length < numFlags);

    // Printing the array elements
    return arr;
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchImages = async () => {
    const resp = await fetch("https://flagcdn.com/en/codes.json");
    const data = await resp.json();
    const totalFlags = Object.keys(data).length;
    const flagInts = randFlags(nFlags, totalFlags);
    const flagSequence = [...Array(nFlags).keys()].map((i) => i);
    setFlagSeq(flagSequence);
    const images = Array(...Array(nFlags)).map((v, i) => {
      const randNum = flagInts[i];
      const flagCode = Object.keys(data)[randNum];
      return {
        url: `https://flagcdn.com/${flagCode}.svg`,
        code: flagCode,
        name: Object.values(data)[randNum],
      };
    });
    setFlagData(images);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const clickCardFunc = (event) => {
    const flag = event.currentTarget.firstChild.getAttribute("code");
    if (clickedFlags.includes(flag)) {
      setClickedFlags([]);
      fetchImages();
      setCounter((a) => a + 1);
    } else {
      setClickedFlags((a) => [...a, flag]);
      setFlagSeq((seq) => shuffleArray(seq));
      setCounter((a) => a + 1);
    }
  };
  if (!(typeof flagData === "undefined")) {
    return (
      <div className="App">
        <Deck
          clickCard={clickCardFunc}
          key={counter}
          flagData={flagData}
          flagSeq={flagSeq}
        />
      </div>
    );
  }
}

export default App;

import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = (props) => {
  const [flagData, setFlagData] = useState();

  useEffect(() => {
    const randFlags = (numFlags, maxInt) => {
      // You can take this value from user
      const n = 5;

      // Initial empty array
      const arr = [];

      // Null check
      if (n == 0) {
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
    const fetchImages = async () => {
      const resp = await fetch("https://flagcdn.com/en/codes.json");
      const data = await resp.json();
      const totalFlags = Object.keys(data).length;
      const flagInts = randFlags(15, totalFlags);
      const images = Array(...Array(15)).map((v, i) => {
        const randNum = flagInts[i];
        return {
          url: `https://flagcdn.com/${Object.keys(data)[randNum]}.svg`,
          code: Object.keys(data)[randNum],
          name: Object.values(data)[randNum],
        };
      });
      setFlagData(images);
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.deck}>
      {flagData
        ? Array(...Array(15)).map((v, i) => (
            <Card
              key={flagData[i].code}
              image={flagData[i].url}
              name={flagData[i].name}
              click={props.clickCard}
              code={flagData[i].code}
            />
          ))
        : ""}
    </div>
  );
};

export default Deck;

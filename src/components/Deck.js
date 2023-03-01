import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = () => {
  const [flagData, setFlagData] = useState();
  const [flagSequence, setFlagSequence] = useState();

  useEffect(() => {
    const fetchList = async () => {
      const resp = await fetch("https://flagcdn.com/en/codes.json");
      const data = await resp.json();
      setFlagData(data);
      const totalFlags = Object.keys(data).length;
      const flagSequence = Array(...Array(12)).map((v, i) =>
        Math.floor(Math.random() * totalFlags)
      );
      setFlagSequence(flagSequence);
    };

    fetchList();
  }, []);

  return (
    <div className={styles.deck}>
      {flagData && flagSequence
        ? Array(...Array(12)).map((v, i) => (
            <Card
              key={i}
              keyS={Object.keys(flagData)[Object.values(flagSequence)[i]]}
              name={Object.values(flagData)[Object.values(flagSequence)[i]]}
            />
          ))
        : ""}
    </div>
  );
};

export default Deck;

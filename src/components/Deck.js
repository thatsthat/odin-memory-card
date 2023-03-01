import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = () => {
  const [flagData, setFlagData] = useState();

  useEffect(() => {
    const fetchList = async () => {
      const resp = await fetch("https://flagcdn.com/en/codes.json");
      const data = await resp.json();
      setFlagData(data);
    };

    fetchList();
  }, []);

  return (
    <div className={styles.deck}>
      {flagData
        ? Array(...Array(3)).map((v, i) => (
            <Card
              key={i}
              keyS={Object.keys(flagData)[i]}
              name={Object.values(flagData)[i]}
            />
          ))
        : ""}
    </div>
  );
};

export default Deck;

import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = () => {
  const [flagNames, setFlagNames] = useState();
  const [flagCodes, setFlagCodes] = useState();

  useEffect(() => {
    const fetchList = async () => {
      const resp = await fetch("https://flagcdn.com/en/codes.json");
      const data = await resp.json();
      setFlagNames(Object.values(data));
      setFlagCodes(Object.keys(data));
    };

    fetchList();
  }, []);

  return (
    <div className={styles.deck}>
      {flagNames}
      <div></div>
      {flagCodes}
      {Array(...Array(3)).map((v, i) => (
        <Card key={i} keyS="gb" name="iep" />
      ))}
    </div>
  );
};

export default Deck;

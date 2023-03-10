import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = (props) => {
  return (
    <div>
      <div className={styles.deck}>
        {Array(...Array(15)).map((v, i) => (
          <Card
            key={props.flagData[props.flagSeq[i]].code}
            image={props.flagData[props.flagSeq[i]].url}
            name={props.flagData[props.flagSeq[i]].name}
            click={props.clickCard}
            code={props.flagData[props.flagSeq[i]].code}
          />
        ))}
      </div>
      <div className={styles.link}>
        <a href="https://flagpedia.net">Built on Flagpedia API</a>
      </div>
    </div>
  );
};

export default Deck;

import React from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card} onClick={props.click}>
      <img src={props.image} width="150" alt="flag" code={props.code} />
      <div>{props.name}</div>
    </div>
  );
};

export default Card;

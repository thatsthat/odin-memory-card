import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div>
      <div className={styles.card} onClick={props.click}>
        <img src={props.image} width="150" alt="flag" />
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default Card;

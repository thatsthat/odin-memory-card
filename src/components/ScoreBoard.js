import React, { useState, useEffect } from "react";
import styles from "../styles/ScoreBoard.module.css";

const ScoreBoard = (props) => {
  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    if (props.score > bestScore) setBestScore((a) => a + 1);
  });
  return (
    <div>
      <div className={styles.ScoreBoard}>
        <div className={styles.score}>Score: {props.score}</div>
        <div className={styles.score}>Best Score: {bestScore}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;

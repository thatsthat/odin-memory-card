import React, { useState, useEffect } from "react";
import styles from "../styles/ScoreBoard.module.css";

const ScoreBoard = (props) => {
  return (
    <div>
      <div className={styles.ScoreBoard}>
        <div>Score: {props.score}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;

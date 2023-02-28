import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  const [flagImg, setFlagImg] = useState();

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const imageUrl = `https://flagcdn.com/${props.keyS}.svg`;
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setFlagImg(imageObjectURL);
    return URL;
  };

  return (
    <div>
      <div className={styles.card}>
        <img src={flagImg} width="150" alt="flag" />
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default Card;

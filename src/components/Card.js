import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  const [flagImg, setFlagImg] = useState();
  const [flagName, setFlagName] = useState();

  useEffect(() => {
    fetchImage();
  }, []);

  const fetchImage = async () => {
    const resp = await fetch("https://flagcdn.com/en/codes.json");
    const data = await resp.json();
    const imageUrl = `https://flagcdn.com/${Object.keys(data)[33]}.svg`;
    const res = await fetch(imageUrl);
    const imageBlob = await res.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    setFlagImg(imageObjectURL);
    setFlagName(Object.values(data)[33]);
    return URL;
  };

  return (
    <div>
      <div className={styles.card}>
        <img src={flagImg} width="150" alt="flag" />
        <div>{flagName}</div>
      </div>
    </div>
  );
};

export default Card;

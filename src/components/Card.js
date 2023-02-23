import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  const [img, setImg] = useState();

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
    setImg(imageObjectURL);
    return URL;
  };

  return (
    <div>
      <img src={img} width="30" alt="iep" />
    </div>
  );
};

export default Card;

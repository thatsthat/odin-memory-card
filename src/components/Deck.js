import React, { useState, useEffect } from "react";
import styles from "../styles/Deck.module.css";
import Card from "./Card";

const Deck = () => {
  const [flagData, setFlagData] = useState();

  useEffect(() => {
    const fetchImage = async (flagCode) => {
      const imageUrl = `https://flagcdn.com/${flagCode}.svg`;
      const res = await fetch(imageUrl);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      return imageObjectURL;
    };
    const fetchImages = async () => {
      const resp = await fetch("https://flagcdn.com/en/codes.json");
      const data = await resp.json();
      const totalFlags = Object.keys(data).length;
      const images = await Promise.all(
        Array(...Array(3)).map(async (v, i) => {
          const randNum = Math.floor(Math.random() * totalFlags);
          return {
            url: await fetchImage(Object.keys(data)[randNum]),
            name: Object.values(data)[randNum],
          };
        })
      );
      setFlagData(images);
    };
    fetchImages();
  }, []);

  return (
    <div className={styles.deck}>
      {flagData
        ? Array(...Array(3)).map((v, i) => (
            <Card key={i} image={flagData[i].url} name={flagData[i].name} />
          ))
        : ""}
    </div>
  );
};

export default Deck;

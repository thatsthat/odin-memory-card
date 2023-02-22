import React, { useState, useEffect } from "react";
import styles from "../styles/Card.module.css";

const Card = () => {
  const [state, setState] = useState({
    flagID: "",
    flagName: "",
  });

  useEffect(() => {
    (async () => {
      let resp = await fetch("https://flagcdn.com/en/codes.json");
      let data = await resp.json();
      //console.log(data);
      setState((prevState) => ({
        ...prevState,
        flagID: JSON.stringify(data, null, 2),
      }));
    })();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const object2List = (object) => {};

  return (
    <div>
      <pre>{state.flagID}</pre>
    </div>
  );
};

export default Card;

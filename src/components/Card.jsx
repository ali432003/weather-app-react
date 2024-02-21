import React, { useState, useEffect } from "react";
import moment from "moment-timezone";
import styles from "./card.module.css";
import { FaThermometerHalf } from "react-icons/fa";
import clouds from "/img/cloud.png";
import clear from "/img/clear.png";
import snow from "/img/snow.png";
import rain from "/img/rain.png";
import mist from "/img/mist.png";
import smoke from "/img/smoke.png";
import sun from "/img/sun.png";
import moon from "/img/moon.png";

const Card = (props) => {
  // for date
  const [date, setDate] = useState("");
  useEffect(() => {
    const currentDate = new Date();
    const currentTimeMilliseconds = currentDate.getTime();
    const timezoneOffsetMilliseconds = props.tz * 1000;
    const adjustedTimeMilliseconds =
      currentTimeMilliseconds + timezoneOffsetMilliseconds;
    const adjustedDate = new Date(adjustedTimeMilliseconds);
    setDate(adjustedDate.toDateString());
  }, [props.tz]); // tz = timezone

  // for day
  const [isDaytime, setIsDaytime] = useState(null);
  useEffect(() => {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Convert to seconds

    if (currentTimestamp >= props.sunrise && currentTimestamp < props.sunset) {
      setIsDaytime(true);
    } else {
      setIsDaytime(false);
    }
  }, [props.sunrise, props.sunset]); // run only when sunrise and sunset came

  return (
    <div
      className={styles.cardsContainer}
      style={{ border: `2px solid ${props.color}`, color: `${props.color}` }}>
      <div className={styles.cityDay}>
        <h3>
          City: {props.city} , {props.country}
          {/* City: Karachi ,Pk  */}
        </h3>
        <p>
          <b>Temperature:</b> {props.temp} {"°C"}
          {/* <b>Temperature:</b> 25 {"°C"} */}
        </p>
        <p>
          <b>Feels Like:</b> {props.feel} <FaThermometerHalf />
          {/* <b>Feels Like:</b> 11 <FaThermometerHalf/> */}
        </p>
        <div className={styles.img}>
          {props.main === "Clouds" ? (
            <img src={clouds} className={styles.icons} />
          ) : props.main === "Clear" ? (
            <img src={clear} className={styles.icons} />
          ) : props.main === "Snow" ? (
            <img src={snow} className={styles.icons} />
          ) : props.main === "Rain" ? (
            <img src={rain} className={styles.icons} />
          ) : props.main === "Smoke" ? (
            <img src={smoke} className={styles.icons} />
          ) : (
            <img src={mist} className={styles.icons} />
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "4rem",
          }}>
          <h3 style={{ display: "flex" }}>
            Date <p> : {date}</p>
          </h3>
          <p>
            {isDaytime ? (
              <img src={sun} alt="sun" className={styles.icons} />
            ) : (
              <img src={moon} alt="moon" className={styles.icons} />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
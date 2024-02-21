import { useState, useEffect } from "react";
import night from "/img/night.jpg";
import day from "/img/day.jpg";
import { FaMoon } from "react-icons/fa";
import { MdWbSunny } from "react-icons/md";
import styles from "./App.module.css";
import axios from "axios";
import Card from "./components/Card.jsx";

function App() {
  const [toggle, setToggle] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);

  // Function to fetch weather data from the API
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bef8f4e1ee3d25536e3cf2596c47f45&units=metric`
      );
      setWeatherData(response.data);
      setShow(true);
    } catch (error) {
      console.log("kuch toh garbar hai daya");
      setShow(false);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setShow(false);
    } else {
      fetchData();
    }
    setCity("");
  };

  return (
    <div
      style={{
        backgroundImage: `url(${toggle ? day : night})`,
        backgroundPosition: "left",
        height: "100vh",
      }}>
      <div className={styles.nav}>
        <h1
          style={{ color: `${toggle ? "#070F2B" : "#B5C0D0"}`, margin: "auto" }}>
          Weather App
        </h1>
        <button
          style={{
            borderRadius: "100%",
            height: "2rem",
            padding: "0.4rem",
            marginTop: "1rem",
            width: "2rem",
            backgroundColor: "#B5C0D0",
            marginRight: "1rem",
          }}
          onClick={() => {
            setToggle(!toggle);
          }}>
          {toggle ? <FaMoon /> : <MdWbSunny />}
        </button>
      </div>
      {show ? (
        <Card
          color={toggle ? "#070F2B" : "#B5C0D0"}
          city={weatherData.name}
          id={weatherData.id}
          temp={weatherData.main.temp}
          feel={weatherData.main.feels_like}
          icon={weatherData.weather[0].icon}
          main={weatherData.weather[0].main}
          country={weatherData.sys.country}
          sunrise={weatherData.sys.sunrise}
          sunset={weatherData.sys.sunset}
          tz={weatherData.timezone}
        />
      ) : (
        <div
          className={styles.txt}
          style={{ color: toggle ? "#070F2B" : "#B5C0D0" }}>
          Enter a City Name
        </div>
      )}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter a city name"
          style={{
            width: "20rem",
            textAlign: "start",
            display: "flex",
            margin: "auto",
            marginTop: "2rem",
            padding: "1rem",
          }}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </form>
    </div>
  );
}

export default App;

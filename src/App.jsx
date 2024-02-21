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
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Function to fetch weather data from the API
    const fetchData = async () => {
      if (city) {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3bef8f4e1ee3d25536e3cf2596c47f45&units=metric`
          );
          setWeather(response.data);
          setShow(true); // Show the Card component after fetching data
        } catch (error) {
          console.log("error", error);
          setShow(false); // Hide the Card component if there's an error
        }
      }
    };
    fetchData(); // Fetch data when the component mounts or 'city' changes
  }, [city]);

  const handleChange = (e) => {
    setCity(e.target.value); // Update 'city' state with the input value
  };

  return (
    <div
      style={{
        backgroundImage: `url(${toggle ? day : night})`,
        backgroundPosition: "left",
        height: "100vh",
      }}>
      <div className={styles.nav}>
        <h1 style={{ color: `${toggle ? "#000" : "#B5C0D0"}`, margin: "auto" }}>
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
          color={toggle ? "#000" : "#B5C0D0"}
          city={weather.name}
          id={weather.id}
          temp={weather.main.temp}
          feel={weather.main.feels_like}
          icon={weather.weather[0].icon}
          description={weather.weather[0].description}
          country={weather.sys.country}
          sunrise={weather.sys.sunrise}
          sunset={weather.sys.sunset}
          tz={weather.timezone}
        />
      ) : (
        <div
          className={styles.txt}
          style={{ color: toggle ? "#000" : "#B5C0D0" }}>
          Enter a City Name
        </div>
      )}
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
        onChange={handleChange}
      />
    </div>
  );
}

export default App;

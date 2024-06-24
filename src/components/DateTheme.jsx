import React, { useContext, useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import { WeatherContext } from "../contexts/WeatherContext";

export function DateTheme({ col = 2 }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const { weather } = useContext(WeatherContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  let [date, setDate] = useState(new Date());
  useEffect(() => {
    if (weather) {
      // Correctly create a new Date object using the timestamp
      setDate(new Date(weather.location.localtime_epoch * 1000));
    }
  }, [weather]);

  const formatTime = (date) => {
    if (!(date instanceof Date)) return "";
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes; // add leading zero if needed
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <Col xs={col} className="date-theme">
      <div className="date-time">
        <p>{weather ? weather.location.localtime.split(" ")[0] : ""}</p>
        <p>{weather ? formatTime(date) : ""}</p>{" "}
      </div>
      <label className="switch">
        <input
          onClick={handleThemeToggle}
          type="checkbox"
          checked={theme === "dark"}
          readOnly
        />
        <span className="slider" />
      </label>
    </Col>
  );
}

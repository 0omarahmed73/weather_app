import React, { useContext, useEffect } from "react";
import { Col } from "react-bootstrap";
import useLocalStorage from "use-local-storage";
import { WeatherContext } from "../contexts/WeatherContext";

export function DateTheme({ col = 2 }) {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const {weather} = useContext(WeatherContext);
  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Col xs={col} className="date-theme">
      <div className="date-time">
        <p>{weather ? weather.location.localtime.split(' ')[0] : ''}</p>
        <p>{weather ? weather.location.localtime.split(' ')[1] : ''}</p>
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

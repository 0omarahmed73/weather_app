import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import useLocalStorage from "use-local-storage";

export function DateTheme({col = 2}) {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <Col xs={col} className="date-theme">
      <div className="date-time">
        <p>24/6/2024</p>
        <p>12:00 PM</p>
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

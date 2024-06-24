import { useGeolocation } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { Weather } from "./services/find_weather";
import { NavBar } from "./components/NavBar";

function HomePage() {
  const state = useGeolocation();
  const [weather, setWeather] = useState({});
  useEffect(() => {
    if (state.latitude && state.longitude) {
      Weather.findWeather({ state }).then((response) => {
        setWeather(response);
      });
    }
  }, [state]);
  console.log(weather);
  return (
    <div className="parent">
      <NavBar />
    </div>
  );
}

export default HomePage;

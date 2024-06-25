import { useGeolocation } from "@uidotdev/usehooks";
import { createContext, useEffect, useState } from "react";
import { Weather } from "../services/find_weather";
export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [isSearching, setIsSearching] = useState(false);
  const state = useGeolocation();
  const [weather, setWeather] = useState({
    location: {
      name: "Cairo",
      region: "Al Qahirah",
      country: "Egypt",
      lat: 30.11,
      lon: 31.33,
      tz_id: "Africa/Cairo",
      localtime_epoch: 1719245253,
      localtime: "2024-06-24 19:07",
    },
    current: {
      last_updated_epoch: 1719244800,
      last_updated: "2024-06-24 19:00",
      temp_c: 38.3,
      temp_f: 100.9,
      is_day: 1,
      condition: {
        text: "Sunny",
        icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
        code: 1000,
      },
    },
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const setTime = setTimeout(() => {
      if (!state.loading && !state.error && state.latitude && state.longitude) {
        setLoading(true);
        Weather.findWeather({ state }).then((response) => {
          setWeather(response);
        });
      } else {
        Weather.findWeatherByCity({ city: "Alexandria" }).then((response) => {
          setWeather(response);
        });
      }
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(setTime);
    };
  }, [state]);
  console.log(weather);
  return (
    <WeatherContext.Provider
      value={{ weather, loading, isSearching, setIsSearching }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

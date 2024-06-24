import { NavBar } from "./components/NavBar";
import { motion } from "framer-motion";
import { WeatherContext } from "./contexts/WeatherContext";
import { useContext, useEffect } from "react";
import Loading from "./components/Loading/Loading";
import { useLocalStorage } from "@uidotdev/usehooks";

function HomePage() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const { loading } = useContext(WeatherContext);
  return loading ? (
    <div className="loading">
      <Loading />
    </div>
  ) : (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        type: "spring",
        bounce: 1,
        delay: 0.2,
        velocity: 0.5,
        stiffness: 260,
        damping: 30,
      }}
      className="parent"
    >
      <NavBar />
    </motion.div>
  );
}

export default HomePage;

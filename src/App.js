import { useState, useEffect } from "react";

import CareFul from "./components/CareFul/Careful";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import JamesKnownFrom from "./components/JamesKnownFrom/JamesKnownFrom";
import LookingFor from "./components/LookingFor/LookingFor";
import NoTax from "./components/NoTax/NoTax";
import Roadmap from "./components/Roadmap/Roadmap";
import Loader from "./components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timeid = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeid);
    };
  }, []);
  return (
    <>
      <>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <HeroSection />
            <LookingFor />
            <CareFul />
            <Roadmap />

            <JamesKnownFrom />
          </>
        )}
      </>
    </>
  );
}

export default App;

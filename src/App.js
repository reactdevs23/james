import CareFul from "./components/CareFul/Careful";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import JamesKnownFrom from "./components/JamesKnownFrom/JamesKnownFrom";
import LookingFor from "./components/LookingFor/LookingFor";
import NoTax from "./components/NoTax/NoTax";
import Roadmap from "./components/Roadmap/Roadmap";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <LookingFor />
      <CareFul />
      <Roadmap />

      <JamesKnownFrom />
    </>
  );
}

export default App;

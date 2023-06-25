import React from "react";
import "./App.css";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs.jsx";
import SmartEnergy from "./Components/SmartEnergy";
import Pattern from "./Components/Pattern";
import PercheSire from "./Components/PercheSire";
import SceSire from "./Components/SceSire";
import Sole from "./Components/Sole";
import FaQs from "./Components/FaQs";
import Contact from "./Components/Contact";
import SolarFooter from "./Components/SolarFooter";

function App() {
  return (
    <div>
      <Header />
      <AboutUs />
      <SmartEnergy />
      <Pattern />
      <PercheSire />
      <SceSire />
      <Sole />
      <FaQs />
      <Contact />
      <SolarFooter />
    </div>
  );
}

export default App;

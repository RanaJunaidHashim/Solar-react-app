import React from "react";
import "./Sire.css";
import imgener1 from "../img/imgener1.png";
import imgener2 from "../img/imgener2.png";

const SmartEnergy = () => {
  return (
    <section id="sire">
      <div className="Sire">
        <div>
          <img src={imgener1} alt="img-ener" />
          <img src={imgener2} alt="img-ener" />
        </div>
        <div>
          <h2>S.I.R.E</h2>
          <h2>Smart Integrated Renewable Energy</h2>
          <p>
            S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
            la produzione, conversione e gestione dell'energia solare, studiato
            specificatamente per installazioni all'interno di condomini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SmartEnergy;

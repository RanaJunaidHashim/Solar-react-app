import React from "react";
import pic1 from "../img/Group-22.png";
import pic2 from "../img/Group-33.png";
import pic3 from "../img/Group44.png";
import pic4 from "../img/Group11.png";
import pic5 from "../img/Vector12.png";
import pic6 from "../img/Vector13.png";
import pic7 from "../img/Vector14.png";

import "./PercheSire.css";

const PercheSire = () => {
  return (
    <section id="whyus" className="perche">
      <h2 className="about-head">Perchè S.I.R.E.</h2>
      <div>
        <div class="pcard">
          <img src={pic1} alt="Avatar" />

          <h2>Risparmio Energetico</h2>
          <p>
            Risparmia da un minimo del 60% sulla bolletta fino all'indipendenza
            energetica anche grazie alla schermatura solare che consente una
            riduzione fino al 95% dei raggi UV e quindi un minor utilizzo del
            condizionatore
          </p>
        </div>
        <div class="pcard">
          <img src={pic2} alt="Avatar" />

          <h2>Mobilità Elettrica</h2>
          <p>
            L'unica soluzione che rende l’utilizzo di un’auto elettrica
            veramente economico. L’efficienza dei pannelli e le batterie di
            accumulo garantiscono fino a 29.000 chilometri annui a emissioni
            zero.
          </p>
        </div>
        <div class="pcard">
          <img src={pic3} alt="Avatar" />

          <h2>Comunità Energetica</h2>
          <p>
            Dal concetto di condominio al concetto di comunità energetica:
            Si.Re. è il sistema che rende possibile realizzare una Comunità
            Energetica Rinnovabile senza acquisto di energia elettrica dalla
            rete.
          </p>
        </div>
      </div>
      <div className="perche-foot">
        <div class="pcard">
          <img src={pic4} alt="Avatar" />
          <h2>110%</h2>
          <p>Superbonus</p>
        </div>
        <div class="pcard">
          <img src={pic5} alt="Avatar" />
          <h2>65%</h2>
          <p>Detrazione DOMOTICA</p>
        </div>
        <div class="pcard">
          <img src={pic6} alt="Avatar" />
          <p>Progettazione personalizzata</p>
        </div>
        <div class="pcard">
          <img src={pic7} alt="Avatar" />
          <p>consulenza fiscale sui bonus</p>
        </div>
      </div>
    </section>
  );
};

export default PercheSire;

import React from "react";
import "./SceSire.css";
import pic1 from "../img/pexels-pix.png";
import pic2 from "../img/pexels-burak.png";
import pic3 from "../img/Vector11.png";
import pic4 from "../img/Vector12.png";

const SceSire = () => {
  return (
    <section id="product">
      <div className="SceSire">
        <h2 className="about-head">Scegli il tuo SIRE</h2>
        <div className="SceSire-col">
          <div class="pcard">
            <img src={pic1} alt="Avatar" />
            <h2>S.I.R.E Direct</h2>
            <ul>
              <li>Sistema Plugin</li>
              <li>
                Struttura meccanizzata in poliuera e sensoristica intelligente
              </li>
              <li>Pannelli alta efficienza da 1KW</li>
              <li>Inverter e conne ssione aII'impianto domestico</li>
              <li>App di controllo e gesti one</li>
            </ul>
            <p>CONSIGLIATO PER:</p>
            <div className="flex-image">
              <div class="ellipse-container">
                <img src={pic4} alt="myImage" />
              </div>
              <div class="ellipse-container">
                <img src={pic3} alt="myImage" />
              </div>
            </div>
            <p>Scopri le caratteristiche tecniche</p>
            <div className="Sec-list">
              <ul>
                <li>Te mpo di ricarica medio in estate</li>
                <li>TBD Tempo di scarica a 16A.</li>
                <li>TBD Autonomia dalla rete elettrica.</li>
                <li>TBD Autonomia in casa di blackout.</li>
                <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                <li>Te mpo di ricarica medio in estate.</li>
              </ul>
            </div>
          </div>

          <div class="pcard">
            <img src={pic2} alt="Avatar" />
            <h2>S.I.R.E Full</h2>
            <ul>
              <li>
                Struttura meccanizzata in poliuera e sensoristica intelligente
              </li>
              <li>Pannelli alta efficienza da 1KW</li>
              <li>Inverter e conne ssione aII'impianto domestico</li>
              <li>App di controllo e gesti one</li>
            </ul>
            <p>CONSIGLIATO PER:</p>
            <div className="flex-image">
              <div class="ellipse-container tipdowna">
                <img src={pic4} alt="myImage" />
              </div>
              <div class="ellipse-container tipdownb">
                <img src={pic3} alt="myImage" />
              </div>
            </div>
            <p>Title here if they have othervise remove this</p>
            <div className="Sec-list">
              <ul>
                <li>Siste ma 2 kW con accumuIo.</li>
                <li>Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
                <li>Te mpo di scarica a 16A is 8 ore.</li>
                <li>Autonomia dalla rete eIettrica 62Po.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SceSire;

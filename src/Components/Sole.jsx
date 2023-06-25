import React from "react";
import "./Sole.css";
import pic1 from "../img/sole4.png";
import pic2 from "../img/sole1.png";
import pic3 from "../img/sole2.png";
import pic4 from "../img/sole3.png";
const Sole = () => {
  return (
    <section id="working" className="sole">
      <h2 className="about-head">Connettiti al sole anche tu</h2>

      <div className="sole-cards">
        {/* <div className="card-border"> */}
        <div class="pcard">
          <img src={pic1} alt="Avatar" />
          <h2>Richiedi un Preventivo</h2>
          <p>
            Senza impegno un nostro Solar expert ti contatterâ per verificare Ie
            tue esirenze ditilizzn
          </p>
        </div>
        {/* </div> */}
        <div class="pcard">
          <img src={pic2} alt="Avatar" />
          <h2>Verifica la compatibilitâ</h2>
          <p>Verifica immediata della necessitâ tecniche di installazione</p>
        </div>
        <div class="pcard">
          <img src={pic3} alt="Avatar" />
          <h2>Installazione</h2>
          <p>
            Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE in
            massimo 2 ore
          </p>
        </div>
        <div class="pcard">
          <img src={pic4} alt="Avatar" />
          <h2>Enjoy your Sun Power</h2>
          <p>Connettiti alla APP e goditi la tua energia solare</p>
        </div>
      </div>

      <button className="btn">Collegati al sole</button>

    </section>
  );
};

export default Sole;

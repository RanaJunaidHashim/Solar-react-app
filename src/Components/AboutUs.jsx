import React from "react";
import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import "./About.css";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const AboutUs = () => {
  return (
    <>
      <section id="aboutme" className="about">
        <h2 className="about-head">Chi Siamo</h2>
        <p>
          Solar Innovatio è una PMI innovativa italiana specializzata nella
          progettazione e realizzazione di sistemi fotovoltaici intelligenti.
          Solar Innovatio unisce alla decennale esperienza maturata nel panorama
          italiano nell'ambito delle soluzioni fotovoltaiche un approccio
          ingegneristico, innovativo, digitale alla principale fonte di energia
          rinnovabile.
        </p>
        <div className="about-parent">
          <div className="about-box">
            <img src={img1} alt="img1" />
            <h2>Cristian Testoni</h2>
            <p>
              Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e
              progettista in aziende meccaniche. Ho avviato come imprenditore
              svariate iniziative in ambito Automotive e mobilità elettrica.
            </p>
          </div>
          <div className="about-box">
            <img src={img2} alt="img2" />

            <h2>Francesco Gavioli</h2>
            <p>
              Nel corso degli anni ho maturato una profonda conoscenza nella
              progettazione e realizzazione di impianti elettrici e di energia
              rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda
              all’avanguardia nell’installazione di impianti fotovoltaici
            </p>
          </div>
          <div className="about-box">
            <img src={img3} alt="img3" />

            <h2>Massimo Fabi</h2>
            <p>
              Laurato in Economia e Commercio mi sono occupato per anni di
              Business Development sia in multinazionali che PMI italiane in
              differenti settori
            </p>
          </div>
        </div>
        <div className="about-quote">
          <RiDoubleQuotesL />
          <p>
            Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
            componente di una soluzione ingegneristica più completa che
            comprende sensoristiche avanzate e l'integrazione con i sistemi
            domotici di casa.
          </p>
          <RiDoubleQuotesR />
        </div>
        <h2 className="about-foot">Cristian Testoni</h2>
      </section>
    </>
  );
};

export default AboutUs;

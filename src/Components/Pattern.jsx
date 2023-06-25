import React from "react";
import "./Pattern.css";
// import pattern1 from "../img/bg-pattern1.png";
import Group1 from "../img/Group-1.png";
import Group2 from "../img/Group-2.png";
import Group from "../img/Group.png";
import Vector from "../img/Vector.png";
import Vector1 from "../img/Vector-1.png";
import Vector2 from "../img/Vector-2.png";

const Pattern = () => {
  return (
    <section id="features">
      <div className="pattern">
        <h2>Connesso, Intelligente, Resistente</h2>
        <div className="pattern-box">
          <div className="box-equal">
            <div>
              <img src={Group1} alt="Group1" />
              <div>
                <h2>Versatile</h2>
                <p>
                  Installabile in qualsiasi balcone anche all'interno del
                  condominio. Non richiede autorizzazioni ne opere murarie.
                  Utile anche come schermatura solare
                </p>
              </div>
            </div>
            <div>
              <img src={Group2} alt="Group2" />
              <div>
                <h2>Indipendente e Green</h2>
                <p>
                  dalle fonte non rinnovabili non è più un’utopia. S.i.r.e.
                  fornisce l’accesso a fonti energetiche green anche a chi non
                  ha un tetto di proprietà.
                </p>
              </div>
            </div>
            <div>
              <img src={Group} alt="Group" />
              <div>
                <h2>Automatizzato</h2>
                <p>
                  Totalmente automatico e retraibile, S.I.R.E regola la quantità
                  di sole in casa in base alle necessità. Un perfetto connubio
                  tra sole e ombra. I suoi sensori regolano l'esposizione in
                  base alle condizioni atmosferiche.
                </p>
              </div>
            </div>
          </div>

          <div className="box-equal">
            <div>
              <img src={Vector1} alt="vector1" />
              <div>
                <h2>Connesso</h2>
                <p>
                  Il sistema si connette ai dispositivi Alexa, Google,
                  elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di
                  produzione dell’energia e ricevi notifiche e suggerimenti per
                  l’utilizzo ottimale dell’energia autoprodotta.
                </p>
              </div>
            </div>
            <div>
              <img src={Vector2} alt="Vector2" />
              <div>
                <h2>Efficiente</h2>
                <p>
                  Totalmente automatico e retraibile, S.I.R.E regola la quantità
                  di sole in casa in base alle necessità. Un perfetto connubio
                  tra sole e ombra. I suoi sensori regolano l'esposizione in
                  base alle condizioni atmosferiche.
                </p>
              </div>
            </div>
            <div>
              <img src={Vector} alt="Vector" />
              <div>
                <h2>Resistente</h2>
                <p>
                  Il sistema è realizzato con un rivestimento protettivo,
                  impermeabile, isolante e resistente a fenomeni atmosferici
                  aggressivi, all abrasione, urti e graffi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pattern;

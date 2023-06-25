import React from "react";
import Faq from "react-faq-component";
import "./Faq.css";

const FaQs = () => {
  const data = {
    rows: [
      {
        title: "Dove si monta S.I.R.E.?",
        content:
          "S.I.R.E. può essere montato come una tenda sul balcone o come pensilina sulla vetrina, porta, finestra",
      },
      {
        title: "Chi monta l’impianto S.I.R.E.?",
        content: "Please contact us",
      },
      {
        title: "Quanto tempo impiega l’installazione?",
        content: "Please contact us",
      },
      {
        title: "E’ necessario richiedere autorizzazioni al condominio?",
        content: "Please contact us",
      },
      {
        title: "E’ necessario predisporre pratiche per il GSE?",
        content: "Please contact us",
      },
      {
        title: "L’impianto è garantito?",
        content: "Please contact us",
      },
      {
        title: "E’ possibile usufruire di bonus fiscali?",
        content: "Please contact us",
      },
    ],
  };

  const styles = {
    bgColor: "#ececec2a",
    titleTextColor: "#363636",
    // color: #54595F;
    rowTitleColor: "#363636",
    rowContentColor: "#54595F",
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "+",
    // tabFocus: trues
    expandIcon: "+",
    collapseIcon: "-",
  };

  return (
    <section className="faq">
      <h2 className="about-head">Frequently Asked Questions</h2>

      <div className="faq-list">
        <div>
          <Faq data={data} styles={styles} config={config} />
        </div>
      </div>
      <button className="btn">Collegati al sole</button>
    </section>
  );
};

export default FaQs;

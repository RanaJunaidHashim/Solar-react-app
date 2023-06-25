import React from "react";
import "./Contact.css";
import svg1 from "../img/Locat-svg.svg";
import svg2 from "../img/email-svg.svg";
import svg3 from "../img/phone-svg.svg";
import svg4 from "../img/Send-svg.svg";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <h2 className="about-head">CONTATTACI</h2>
        <div className="sec-contact">
          <div className="c-one">
            <div>
              <img src={svg1} alt="" />
              <p>
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>
            <div>
              <img src={svg2} alt="" />
              <p>
                email@email.com <br /> support@email.com
              </p>
            </div>
            <div>
              <img src={svg3} alt="" />
              <p>+29 98595 8998</p>
            </div>
            <div>
              <p>We Will get back to you within 24 hours. Or Call us Now</p>
            </div>
          </div>
          <div className="c-two">
            <input size="50" placeholder="First Name" />
            <input size="50" placeholder="Last Name" />
            <input placeholder="Email" />
            <textarea rows="5" placeholder="Message" />
            <button className="btn">SEND</button>
          </div>
        </div>
      </section>
      <section className="c-foot">
        <div>
          <h2>Subscribe for Newsletter</h2>
          <p>
            Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae
            orci maecenas tortor odio
          </p>
        </div>
        <div>
          <input placeholder="Inserisci la tua email" />
          <div>
            <img src={svg4} alt="okk sub" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

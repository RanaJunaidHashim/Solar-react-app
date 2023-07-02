import React, { useState, useEffect, useRef } from "react";
import { IoIosCall, IoIosMail } from "react-icons/io";
// import logo1 from "../img/logo 1.png";
import logo2 from "../img/logo-solar-head.png";
import boximage from "../img/box-image.png";
import { Fade as Hamburger } from "hamburger-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const menuRef = useRef(null);
  const OutClick = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
    // both works
    // if (!isOpen || !event.target.closest(".nav-btn")) {
    //   setIsOpen(false);
    // }
  };

  useEffect(() => {
    document.addEventListener("click", OutClick);

    return () => {
      document.removeEventListener("click", OutClick);
    };
  }, [isOpen]);

  return (
    <>
      <div>
        <div className="containers">
          <img src={logo2} alt="image1" />
          <div>
            <div>
              <IoIosCall />
              <span>0203 519 4420</span>
            </div>
            <div>
              <IoIosMail />
              <span>info@solarinnovatio.com</span>
            </div>
            <div>
              <button className="btn"> <a href="#contact">Contact</a></button>
            </div>
          </div>
        </div>

        <button className="nav-btn" ref={menuRef} onClick={toggleMenu}>
          <Hamburger
            size={20}
            direction="right"
            toggled={isOpen}
            toggle={setIsOpen}
          />
        </button>

        <nav className={isOpen ? "" : "open"}>
          <ul className={`navPhone ${isOpen ? "navPhoneComes" : ""}`}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#aboutme">Chi Siamo</a>
            </li>
            <li>
              <a href="#sire">S.I.R.E</a>
            </li>
            <li>
              <a href="#features">SIRE Features</a>
            </li>
            <li>
              <a href="#whyus">Why SIRE?</a>
            </li>
            <li>
              <a href="#product">SIRE Product</a>
            </li>
            <li>
              <a href="#working">How it Works?</a>
            </li>
          </ul>
        </nav>
        <div className="img-box">
          <img
            src={boximage}
            alt="Snow"
            style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          />
          <div className="centered a">Il tuo accesso al sole</div>
          <div className="centered b">
            Sistemi fotovoltaici intelligenti ad uso residenziale, anche in
            assenza di tetto. La tua fonte d'energia, gratuita e sostenibile
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

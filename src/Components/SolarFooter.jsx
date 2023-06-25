import React from "react";
import "./SolarFooter.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import foothead from "../img/foothead.png";
import footimg from "../img/foot-img.png";
import footimg1 from "../img/f-locat.png";
import footimg2 from "../img/f-email.png";
import footimg3 from "../img/f-call.png";

const SolarFooter = () => {
  const devfooter = "</> with ❤️ by ";

  return (
    <footer className="footer">
      <div className="sec-footer">
        <div className="footer-flex">
          <div>
            <img src={foothead} alt="footimg" />
            <p>
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio Leo dui fermentum tristique urna
              tellus eget amet aliquam.
            </p>
            <img src={footimg} alt="imgone" />
            <img src={footimg} alt="imgone" />
            <img src={footimg} alt="imgone" />
            <img src={footimg} alt="imgone" />
            <img src={footimg} alt="imgone" />
            <img src={footimg} alt="imgone" />
          </div>
          <div>
            <p>Quick Links</p>
            <ul>
              <li>Home</li>
              <li>Chi Siamo</li>
              <li>S.I.R.E</li>
              <li>SIRE Features</li>
              <li>Why SIRE?</li>
              <li>SIRE Product</li>
              <li>How it Works?</li>
            </ul>
          </div>
          <div>
            <p>Useful Links</p>
            <ul>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>FAQ</li>
              <li> <br/></li>
              <p>Documents</p>
              <li style={{textDecorationLine:"underline"}}>LinkedIn Here</li>
            </ul>
          </div>

          <div>
            <p>Contact Us</p>
            <div className="c-one">
              <div>
                <img src={footimg1} alt="" />
                <p>
                  Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                  vitae orci
                </p>
              </div>
              <div>
                <img src={footimg2} alt="" />
                <p>
                  email@email.com <br /> support@email.com
                </p>
                {/* <p>support@email.com</p> */}
              </div>
              <div>
                <img src={footimg3} alt="" />
                <p>+29 98595 8998</p>
              </div>
            </div>
          </div>
        </div>
        {/* {console.log(window.screen.width)}
        {window.screen.width <= 400 && <br />} */}
        <div className="f-footer">
        <div>
          <p>All Rights Reserved</p> <a
              href="https://junaidrana.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >{devfooter} 
              Junaid Rana<GoVerified style={{ fontSize: "12px", marginLeft: "2px", color:"#03b3ff" }} />
            </a></div>
          <div>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SolarFooter;

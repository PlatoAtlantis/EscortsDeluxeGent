import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faInstagram,
} from "@fortawesome/fontawesome-free-brands"

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-primary-darker has-text-white-ter">
        <div className="content has-text-centered">
         <h1 className="has-text-warning">
           Escortbedrijf
         </h1>
        </div>
        <div className="content has-text-centered has-background-primary-darker has-text-white-ter">
          <div className="container has-background-primary-darker has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Over ons
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/veelgesteldevragen">
                        Veelgestelde vragen
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://facebook.com">
                  <FontAwesomeIcon icon={faFacebook} size="2x"/>
                </a>
                <a title="instagram" href="https://instagram.com">
                  <FontAwesomeIcon icon={faInstagram} size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
};

export default Footer;

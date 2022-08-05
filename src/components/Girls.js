import * as React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Girls = () => {

  return (
    <>
      <div className="">
        <div className="container">
    <div className="columns has-text-centered">

      <div className="column has-text-centered">
        <Link to="/chelsea">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/chelsea2.png')`,
            }}
          >
            <div className="girlinfo has-text-warning centered">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Chelsea</h2>
                <p className="fadenameslow">Leeftijd: 27 jaar</p>
              </div>
            </div>
          </div>
        </Link>
      </div>


      <div className="column has-text-centered">
        <Link to="/fleur">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/fleur4.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
          <h2 className="title mb-0 fadename has-text-warning">Fleur</h2>
            <p className="fadenameslow">Leeftijd: 25 jaar</p>
          </div>
          </div>
        </div>
        </Link>
      </div>

      <div className="column has-text-centered">
        <Link to="/julia">
          <div
            className="girlcontainer pulse"
            style={{
              backgroundImage: `url('/img/julia1.png')`,
            }}
          >
            <div className="girlinfo has-text-warning">
              <div className="infocontainer">
                <i className="is2 fadename">👑</i>
                <FontAwesomeIcon icon="faCrown"/>
                <h2 className="title mb-0 fadename has-text-warning">Julia</h2>
                <p className="fadenameslow">Leeftijd: 23 jaar</p>
              </div>
            </div>
          </div>
        </Link>
      </div>

    </div>

  <div className="columns has-text-centered centered">

    <div className="column has-text-centered">
      <Link to="/kirsten">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/kirsten2.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Kirsten</h2>
              <p className="fadenameslow">Leeftijd: 28 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column has-text-centered">
      <Link to="/lara">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/lara4.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Lara</h2>
              <p className="fadenameslow">Leeftijd: 22 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

    <div className="column has-text-centered">
      <Link to="/patricia">
        <div
          className="girlcontainer pulse"
          style={{
            backgroundImage: `url('/img/patricia1.png')`,
          }}
        >
          <div className="girlinfo has-text-warning">
            <div className="infocontainer">
              <i className="is2 fadename">👑</i>
              <FontAwesomeIcon icon="faCrown"/>
              <h2 className="title mb-0 fadename has-text-warning">Patricia</h2>
              <p className="fadenameslow">Leeftijd: 21 jaar</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  </div>

        </div>
      </div>
    </>
);
};

export default Girls;

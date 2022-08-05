import * as React from "react";
import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faLock,
  faUserTie,

} from "@fortawesome/free-solid-svg-icons";

const About = () => {

  return (
    <>
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/tiger.jpeg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1 has-text-primary"
            style={{
              backgroundColor: "#ffffff",
              padding: "1rem",
            }}
          >
            Over ons
          </h1>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns has-text-centered">
                <div className="column ">
                  <div className="content">
                    <div className="content">
                      <h2 className="title has-text-warning">Van harte welkom bij escortbedrijf</h2>
                      <h3 className="subtitle">"Wij zijn gespecialiseerd in het creëeren van onvergetelijke ervaringen voor zowel onze cliënten als onze escorts."</h3>
                      <br/>
                       <p className="has-text-black">Wij zijn nog een relatief nieuw escortbureau, maar dankzij onze voortreffende klanttevredenheid zijn wij onderweg om onzelf de beste te noemen.
                         Wij werken het liefst met onze klanten en dames voor de lange termijn. Wij luisteren altijd naar de wensen van de klant en op basis daarvan kunnen wij u de perfecte match adviseren.
                         Of u nu een discrete date wilt, een companion voor een business trip, een echte girlfriend experience, of een trio. Bij ons bent u altijd aan het juiste adres.

                       </p>

                            </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <sections className="hero has-background-primary-dark nomargintop has-text-centered">
          <div className="hero-body has-text-centered">
            <div className="columns has-text-centered">

              <div className="column">
                <FontAwesomeIcon icon={faHeart} size="2x" className="has-text-warning"/>
                <h3 className="has-text-warning">Warm</h3>
                <br/>
                <p className="has-text-warning">Helaas komen louche zaken nog vaak voor in onze branch. Zowel onze dames als ons team bestaat uit goed opgeleide mensen voor wie klantvriendelijkheid en eerlijkheid er toe doet.</p>

              </div>
              <div className="column">
                <FontAwesomeIcon icon={faLock} size="2x" className="has-text-warning"/>
                <h3 className="has-text-warning">Discreet</h3>
                <br/>
                <p className="has-text-warning">Discretie staat bij ons hoog in het vaandel. Dit is van cruciaal belang voor zowel onze klanten als onze dames. Meer weten over ons protocol?</p>

              </div>
              <div className="column">
                <FontAwesomeIcon icon={faUserTie} size="2x" className="has-text-warning"/>
                <h3 className="has-text-warning">Integer</h3>
                <br/>
                <p className="has-text-warning">Wij hechten veel waarde aan lange termijn contacten. Daarom behandelen wij onze klanten én escorts ook echt zoals wij zelf behandeld willen worden.</p>
              </div>

            </div>
          </div>
        </sections>
      </Layout>
    </>
  );
};

export default About;

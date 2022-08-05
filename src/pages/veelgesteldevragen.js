import * as React from "react";
import Layout from "../components/Layout";
import VeelGesteldeVragen from "../components/VeelGesteldeVragen"

const VeelgesteldeVragenPagina = () => {

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
          Veelgestelde Vragen
        </h1>
      </div>
        <VeelGesteldeVragen/>
      </Layout>
    </>
  );
};

export default VeelgesteldeVragenPagina;

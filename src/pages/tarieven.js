import * as React from "react";
import Layout from "../components/Layout";
import Tarieven from "../components/Tarieven"

const TarievenPagina = () => {

  return (
    <>
      <Layout>
      <div
        className="full-width-image-container margin-top-0 nomarginbottom"
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
          Tarieven
        </h1>
      </div>
        <Tarieven/>
      </Layout>
    </>
  );
};

export default TarievenPagina;

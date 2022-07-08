import React from "react";
import Layout from "../components/Layout";
import Girls from "../components/Girls";
import FullWidthImage from "../components/FullWidthImage";

const Index = () => {
  return (
    <>
      <Layout>
        <FullWidthImage/>
        <section className="section has-text-centered">
        <h2 className="title has-text-primary">Onze dames</h2>
        <Girls/>
        </section>
      </Layout>
    </>
  )};
export default Index;

import * as React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../assets/all.sass";
import { withPrefix } from "gatsby";

const Layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>Deluxe Escorts</title>
        <meta name="description" content="Deluxe Escorts" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/tiger.jpeg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/tiger.jpeg`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/tiger.jpeg`}
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/tiger.jpeg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Deluxe Escorts" />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix("/")}img/tiger.jpeg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

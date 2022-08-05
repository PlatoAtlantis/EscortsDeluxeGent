import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactTypingEffect from 'react-typing-effect';


export default function FullWidthImage() {


  return (
      <div
        className="margin-top-0"
        style={{
          display: "grid",
          alignItems: "center",
        }}
      >
          <StaticImage
            src="../../static/img/tiger.jpeg"
            alt="Escort Bedrijf"
            objectFit={"cover"}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              height: "50vh",
              width: "100%",
            }}
            // You can optionally force an aspect ratio for the generated image
            aspectratio={3 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt=""
            formats={["auto", "webp", "avif"]}
          />
          <div
            className="has-text-centered"
            style={{
                // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                position: "relative",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
              }}
          >

            <ReactTypingEffect
              text={["Passi️e", "Erotiek", "Avontuur"]}
              speed={100}
              eraseDelay={3000}
              eraseSpeed={100}
              typingDelay={500}
              cursor={"😍"}
              cursorClassName={"noblinkemoji"}

              className="subtitle has-light-hue has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen has-text-primary"
              style={{
                backgroundColor: "#191919",
                lineHeight: "1",
                padding: "1rem",
                marginTop: "0.5rem",
              }}
            />
          </div>
      </div>
  );
}

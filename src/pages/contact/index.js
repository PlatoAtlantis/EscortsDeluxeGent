import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,

} from "@fortawesome/fontawesome-free-brands";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";



function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
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
            Contact
          </h1>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="columns">
                <div className="column is-offset-1">
                  <div className="content">
                    <div className="content">
                      <h4 className="has-text-primary">Wij zijn geopend vanaf 12 tot 2, boekingen kunnen ook op een ander tijdstip worden ingepland maar wij zijn uitsluitend op de aangegeven tijden bereikbaar.</h4>
                      <h1 className="title">Contact</h1>
                      <p className="subtitle has-text-primary"></p>
                      <div className="container">
                        <div className="content">
                          <form
                            name="contact"
                            method="post"
                            action="/contact/thanks/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            onSubmit={this.handleSubmit}
                          >
                            {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                            <input type="hidden" name="form-name" value="contact" />
                            <div hidden>
                              <label>
                                Don’t fill this out:{" "}
                                <input name="bot-field" onChange={this.handleChange} />
                              </label>
                            </div>
                            <div className="field">
                              <label className="label" htmlFor={"name"}>
                                Your name
                              </label>
                              <div className="control">
                                <input
                                  className="input"
                                  type={"text"}
                                  name={"name"}
                                  onChange={this.handleChange}
                                  id={"name"}
                                  required={true}
                                />
                              </div>
                            </div>
                            <div className="field">
                              <label className="label" htmlFor={"email"}>
                                Email
                              </label>
                              <div className="control">
                                <input
                                  className="input"
                                  type={"email"}
                                  name={"email"}
                                  onChange={this.handleChange}
                                  id={"email"}
                                  required={true}
                                />
                              </div>
                            </div>
                            <div className="field">
                              <label className="label" htmlFor={"message"}>
                                Message
                              </label>
                              <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      required={true}
                    />
                              </div>
                            </div>
                            <div className="field">
                              <button className="button is-link" type="submit">
                                Send
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>                                        </div>
                  </div>
                </div>
                <div className="column">
                  <h2 className="social has-text-centered">
                    <a
                      className="navbar-item"
                      href="https://api.whatsapp.com/send?phone=310647628532"
                      target="_blank"
                      rel="noopener noreferrer"
                    >                  <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
                    </a>
                    <a href ="mailto: deluxeescortsofficial@gmail.com">
                      <FontAwesomeIcon icon={faEnvelope} size="2x"/>
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
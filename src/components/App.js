import React, { Component, Fragment } from "react";
import { Header, Footer } from "./layouts";
import Content from "./content";
import { render } from "react-dom";
import "./App.css";

export default class extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

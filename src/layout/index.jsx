import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../scss/index.scss"
// import "./index.css";

import Header from "../components/Header/Header";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <Header />
        {children}
      </div>
    );
  }
}

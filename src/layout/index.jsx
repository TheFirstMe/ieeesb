import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../scss/index.scss"
import { Container, Row, Col } from 'react-bootstrap';
import "./index.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default class MainLayout extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div>
                <Helmet>
                    <meta name="description" content={config.siteDescription} />
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans|Open+Sans+Condensed:700" rel="stylesheet" />
                </Helmet>
                <div className="site">
                    <Header />
                    <div className="site-content">
                        {children}
                    </div>
                    <Footer config={config} />
                </div>
            </div>
        );
    }
}

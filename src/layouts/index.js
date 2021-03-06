import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import "../scss/index.scss"
import { Container, Row, Col } from 'react-bootstrap';
import "./index.scss";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Transition from "../components/transition"

export default class MainLayout extends React.Component {
    render() {
        const { children, location } = this.props;
        return (
            <>
                <Helmet>
                    <html lang="en" />
                    <meta name="description" content={config.siteDescription} />
                </Helmet>
                <div className="site">
                    <Header />
                    <div className="site-content pt-lg-3">
                        <Container>
                            <Transition location={location}>
                                {children}
                            </Transition>
                        </Container>
                    </div>
                    <Footer config={config} />
                </div>
            </>
        );
    }
}

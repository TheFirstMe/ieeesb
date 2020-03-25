/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
// import "../scss/index.scss"
// import { Container, Row, Col } from 'react-bootstrap';
// import "./index.scss";
import Footer from "../components/Foot";
import Header from "../components/Head";
// import Transition from "../components/transition"
import Container from "../components/container"
export default class Layout extends React.Component {
    render() {
        const { children, location } = this.props;
        return (
            <>
                <Helmet>
                    <html lang="en" />
                    <meta name="description" content={config.siteDescription} />
                </Helmet>
                <div
                    sx={{
                        display: `flex`,
                        minHeight: `100vh`,
                        flexDirection: `column`,
                    }}>
                    <Header />
                    <div
                        sx={{
                            mt: `50px`,
                            flexGrow: `1`,

                        }}
                        // className="site-content pt-lg-3"
                    >
                        <Container>
                            {/* <Transition location={location}> */}
                                {children}
                            {/* </Transition> */}
                        </Container>
                    </div>
                    <Footer config={config} />
                </div>
            </>
        );
    }
}

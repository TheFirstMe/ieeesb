import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import LatestPosts from "../components/LatestPosts/LatestPosts";
import Calendar from "../components/Calendar/Calendar";
import { Row, Col } from "react-bootstrap";

class AboutPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet title={`About | ${config.siteTitle}`} />
                <Row>
                    <Col md={12} lg={8} className="py-2 py-lg-0">
                        <About />
                    </Col>
                    <Col md={12} lg={4} className="py-2 py-lg-0">
                        <Row className="ml-lg-1">
                            <Col xs={12}>
                                <LatestPosts />
                            </Col>
                            <Col className="pt-4 pt-lg-0">
                                <h3 className="boxed mb-4">
                                    <span>Calendar</span>
                                </h3>
                                <Calendar />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default AboutPage;

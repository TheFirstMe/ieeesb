import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

const SuccessPage = () => {
    return (
        <Layout>
            <Helmet title={`Thank you | ${config.siteTitle}`} />
            <Row>
                <Col className="text-center pt-5">
                    <h2 className="text-success">Your response has been recieved.</h2>
                </Col>
            </Row>
        </Layout>
    );
}

export default SuccessPage;

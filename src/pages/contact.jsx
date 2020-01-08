import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

export default ({ pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext
    return (
        <Layout crumbs={crumbs} crumbLabel="Contact">
            <Helmet title={`Contact | ${config.siteTitle}`} />
            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    <Contact />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </Layout>
    );
}

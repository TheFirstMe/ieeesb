import React  from "react";
import Helmet from "react-helmet";
import About from "../components/About/About";
import config from "../../data/SiteConfig";
import Sidebar from "../components/sidebar";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/breadcrumbs";
export default ({ pageContext }) => {
    const {
        breadcrumb: { crumbs },
    } = pageContext
    return (
        <>
            <Helmet title={`About | ${config.siteTitle}`} />
            <Breadcrumb crumbs={crumbs} crumbLabel="About" />
            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    <About />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </>
    );
}

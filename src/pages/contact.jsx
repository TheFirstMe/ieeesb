import React from "react";
import Helmet from "react-helmet";
import Contact from "../components/contact-form";
import config from "../../data/SiteConfig";
import Sidebar from "../components/sidebar";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/breadcrumbs";

const ContactPage = ({ pageContext }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext;
  return (
    <>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Breadcrumb crumbs={crumbs} crumbLabel="Contact" />
      <Row>
        <Col md={12} lg={8} className="py-2 py-lg-0">
          <Contact />
        </Col>
        <Col md={12} lg={4} className="py-2 py-lg-0">
          <Sidebar type="secondary" />
        </Col>
      </Row>
    </>
  );
};

export default ContactPage;

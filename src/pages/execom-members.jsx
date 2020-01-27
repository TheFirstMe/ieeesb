import React from "react";
import Helmet from "react-helmet";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import Breadcrumb from "../components/Breadcrumbs"
import { useExecom } from "../components/Hooks/Execom";

export default ({pageContext}) => {
    const {
        breadcrumb: { crumbs },
      } = pageContext
    const data = useExecom();
    return (
        <>
            <Helmet title={`Execom Members | ${config.siteTitle}`} />
            <Breadcrumb crumbs={crumbs} crumbLabel="Execom Members" />
            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    <ExecomMembers members={data.edges[0]} />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </>
    );
}
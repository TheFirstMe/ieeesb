import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

import { useExecom } from "../components/Hooks/Execom";
// this.props.data.allExecomMembersJson.edges[0]
export default ({pageContext}) => {
    const {
        breadcrumb: { crumbs },
      } = pageContext
    const data = useExecom();
    return (
        <Layout crumbs={crumbs} crumbLabel="Execom Members">
            <Helmet title={`Execom Members | ${config.siteTitle}`} />
            <Row>
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    <ExecomMembers members={data.edges[0]} />
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar type="secondary" />
                </Col>
            </Row>
        </Layout>
    );
}
import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";

class ExecomMembersPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Execom Members | ${config.siteTitle}`} />
                <Row>
                    <Col md={12} lg={8} className="py-2 py-lg-0">
                        <ExecomMembers />
                    </Col>
                    <Col md={12} lg={4} className="py-2 py-lg-0">
                        <Sidebar type="secondary" />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default ExecomMembersPage;

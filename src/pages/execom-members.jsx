import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";

class ExecomMembersPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Execom Members | ${config.siteTitle}`} />
                <ExecomMembers />
            </Layout>
        );
    }
}

export default ExecomMembersPage;

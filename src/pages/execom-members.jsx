import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import ExecomMembers from "../components/ExecomMembers/ExecomMembers";
import config from "../../data/SiteConfig";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import {eventQuery} from "./events"

class ExecomMembersPage extends Component {
    render() {
        return (
            <Layout>
                <Helmet title={`Execom Members | ${config.siteTitle}`} />
                <Row>
                    <Col md={12} lg={8} className="py-2 py-lg-0">
                        <ExecomMembers members={this.props.data.allExecomMembersJson.edges[0]} />
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

export const memberQuery = graphql`
  query MemberQuery {
    allExecomMembersJson(
      filter: { year: { eq: "2019" } }
    ) {
      edges {
        node {
            execom{
                execomName
                execomColor
                chair{
                    name
                    designation
                    image{
                        childImageSharp{
                            fluid(maxWidth: 180, quality: 80){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                members{
                    name
                    designation
                    image{
                        childImageSharp{
                            fluid(maxWidth: 180, quality: 80){
                                ...GatsbyImageSharpFluid_withWebp
                                
                            }
                        }
                    }
                }
            }
        }
      }
    }
  }
`;
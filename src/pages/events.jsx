import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing/PostListing";
import Sidebar from "../components/Sidebar/Sidebar";

import { Row, Col } from "react-bootstrap";

class EventsPage extends Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout>
                <Helmet title={`Events | ${config.siteTitle}`} />
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <h3 className="boxed">
                                    <span>Events</span>
                                </h3>
                                <div className="boxed-content">
                                    <PostListing postEdges={postEdges} />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={12} lg={4} className="py-2 py-lg-0">
                        <Sidebar />
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default EventsPage;

/* eslint no-undef: "off" */
export const eventQuery = graphql`
  query EventQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            date
          }
          excerpt(
            pruneLength: 100,
            truncate:true
          )
          timeToRead
          frontmatter {
            title
            tags
            featuredImage{
              childImageSharp{
                fluid(maxWidth: 800, quality: 80){
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            date(formatString: "MMM Do YYYY")
          }
        }
      }
    }
  }
`;
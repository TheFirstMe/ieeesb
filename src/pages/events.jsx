import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Contact from "../components/Contact/Contact";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing/PostListing";

import LatestPosts from "../components/LatestPosts/LatestPosts";
import Calendar from "../components/Calendar/Calendar";
import { Row, Col } from "react-bootstrap";

class EventsPage extends Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout>
                <Helmet title={`Events | ${config.siteTitle}`} />
                <Row>
                    <Col>
                        <PostListing postEdges={postEdges} />
                    </Col>
                </Row>
                {/* <Row>
                    <Col md={12} lg={8} className="py-2 py-lg-0">
                        <Contact />
                    </Col>
                    <Col md={12} lg={4} className="py-2 py-lg-0">
                        <Row className="ml-lg-1">
                            <Col xs={12}>
                                <LatestPosts />
                            </Col>
                            <Col className="pt-4 pt-lg-0">
                                <h3 className="boxed mb-4">
                                    <span>Calendar</span>
                                </h3>
                                <Calendar />
                            </Col>
                        </Row>
                    </Col>
                </Row> */}
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
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date(formatString: "MM DD YYYY")
          }
        }
      }
    }
  }
`;
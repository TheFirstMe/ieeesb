import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import PostListing from "../components/PostListing/PostListing";
import Sidebar from "../components/Sidebar/Sidebar";
import { Row, Col } from "react-bootstrap";
import Pagination from "../components/Pagination";

export default class EventsTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const postEdges = data.allMarkdownRemark.edges;
    const {
      breadcrumb: { crumbs },
    } = pageContext
    const events = Array.from(Array(6).keys())
    return (
      <Layout crumbs={crumbs} crumbLabel="Events">
        <Helmet title={`Events | ${config.siteTitle}`} />
        <SEO />
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
            <Row className="mt-0 mt-md-3">
              <Col>
                <Pagination context={pageContext} />
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

/* eslint no-undef: "off" */
export const eventQuery = graphql`
  query eventQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
      ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    excerpt(
                      pruneLength: 120,
                      truncate:true
                    )
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

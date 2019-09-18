import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import SEO from "../components/SEO/SEO";

import config from "../../data/SiteConfig";
import { Container, Row, Col } from "react-bootstrap";
// import "tail.datetime/css/tail.datetime";


// import 'react-big-calendar/lib/css/react-big-calendar.css';

import Calendar from "../components/Calendar/Calendar";


const now = new Date();
const myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2019, 9, 0),
        end: new Date(2019, 9, 1),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2015, 3, 7),
        end: new Date(2015, 3, 10),
    },

    {
        id: 2,
        title: 'DTS STARTS',
        start: new Date(2016, 2, 13, 0, 0, 0),
        end: new Date(2016, 2, 20, 0, 0, 0),
    },

    {
        id: 3,
        title: 'DTS ENDS',
        start: new Date(2016, 10, 6, 0, 0, 0),
        end: new Date(2016, 10, 13, 0, 0, 0),
    },

    {
        id: 4,
        title: 'Some Event',
        start: new Date(2015, 3, 9, 0, 0, 0),
        end: new Date(2015, 3, 10, 0, 0, 0),
    },
    {
        id: 5,
        title: 'Conference',
        start: new Date(2015, 3, 11),
        end: new Date(2015, 3, 13),
        desc: 'Big conference for important people',
    },
    {
        id: 6,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 12, 30, 0, 0),
        desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
        id: 7,
        title: 'Lunch',
        start: new Date(2015, 3, 12, 12, 0, 0, 0),
        end: new Date(2015, 3, 12, 13, 0, 0, 0),
        desc: 'Power lunch',
    },
    {
        id: 8,
        title: 'Meeting',
        start: new Date(2015, 3, 12, 14, 0, 0, 0),
        end: new Date(2015, 3, 12, 15, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2015, 3, 12, 17, 0, 0, 0),
        end: new Date(2015, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2015, 3, 12, 20, 0, 0, 0),
        end: new Date(2015, 3, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2015, 3, 13, 7, 0, 0),
        end: new Date(2015, 3, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2015, 3, 17, 19, 30, 0),
        end: new Date(2015, 3, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2015, 3, 20, 19, 30, 0),
        end: new Date(2015, 3, 22, 2, 0, 0),
    },
    {
        id: 14,
        title: 'Today',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    },
    {
        id: 15,
        title: 'Point in Time Event',
        start: now,
        end: now,
    },
]


const Filler = () => (
    <div className="w-100" style={{ height: "200px", backgroundColor: 'grey' }} >
    </div>
);

class Index extends React.Component {
    render() {
        const postEdges = this.props.data.allMarkdownRemark.edges;
        return (
            <Layout isHome>
                <Helmet title={config.siteTitle} />
                <SEO />
                {/* <PostListing postEdges={postEdges} /> */}
                {/* <Container>
                    <Row>
                        <Col md={12} lg={8}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h3 className="boxed">
                                            <span>Upcoming Events</span>
                                        </h3>
                                        <Container>
                                            <Row className="mt-4">
                                                <Col>
                                                    <Filler />
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                                <Row className="mt-5">
                                    <Col>
                                        <h3 className="boxed">
                                            <span>Events</span>
                                        </h3>
                                        <Container>
                                            <Row className="mt-4">
                                                <Col>
                                                    <Filler />
                                                </Col>
                                                <Col className="pl-0">
                                                    <Filler />
                                                </Col>
                                            </Row>
                                            <Row className="mt-3">
                                                <Col>
                                                    <Filler />
                                                </Col>
                                                <Col className="pl-0">
                                                    <Filler />
                                                </Col>
                                            </Row>
                                            <Row className="mt-4">
                                                <Col>
                                                    <a className="btn btn-primary" href="/events">See all Events</a>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                        <Col md={12} lg={4} className="mt-5 mt-lg-0">
                            <Container className="px-0">
                                <Row>
                                    <Col>
                                        <h3 className="boxed">
                                            <span>Membership</span>
                                        </h3>

                                        <div className="banner-wrapper mt-4">
                                            <h4 className>
                                                <span>Become a Member</span>
                                            </h4>
                                            <div className="banner-wrapper small">
                                                <p>Sign up today to get involved in IEEE SB GCEK.</p>
                                            </div>
                                            <a className="btn btn-yellow"
                                                href="https://www.ieee.org/go/join_student/"
                                                title="Join IEEE"
                                                target="_blank"
                                                style={{ marginBottom: "45px" }}
                                            >
                                                Join IEEE
                                                </a>
                                        </div>
                                    </Col>
                                    <Col className="pt-lg-4">
                                        <h3 className="boxed mb-4">
                                            <span>Calendar</span>
                                        </h3>
                                        <Calendar />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="">
                        <Col>

                        </Col>
                    </Row>
                </Container> */}

                <Container>
                    <Row>
                        <Col>
                            <h3 className="boxed">
                                <span>Upcoming Events</span>
                            </h3>
                            <Container>
                                <Row className="mt-4">
                                    <Col>
                                        <Filler />
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col>
                            <h3 className="boxed">
                                <span>Events</span>
                            </h3>
                            <Container>
                                <Row className="mt-4">
                                    <Col>
                                        <Filler />
                                    </Col>
                                    <Col className="pl-0">
                                        <Filler />
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col>
                                        <Filler />
                                    </Col>
                                    <Col className="pl-0">
                                        <Filler />
                                    </Col>
                                </Row>
                                <Row className="mt-4">
                                    <Col>
                                        <a className="btn btn-primary" href="/events">See all Events</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default Index;

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
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
            date
          }
        }
      }
    }
  }
`;

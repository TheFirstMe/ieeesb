import React from "react";
import Helmet from "react-helmet";
import { useExecom } from "../hooks";
import { useLatestEvents } from "../hooks";
import SEO from "../components/SEO/SEO";
import { GatsbyImage } from "gatsby-plugin-image";
import config from "../../data/SiteConfig";
import { Row, Col, Button as B } from "react-bootstrap";
import Sidebar from "../components/sidebar";
import { Member } from "../components/ExecomMembers/ExecomMembers";
import styled from "styled-components";

// const now = new Date();
// const myEventsList = [
//     {
//         id: 0,
//         title: 'All Day Event very long title',
//         allDay: true,
//         start: new Date(2019, 9, 0),
//         end: new Date(2019, 9, 1),
//     },
//     {
//         id: 1,
//         title: 'Long Event',
//         start: new Date(2015, 3, 7),
//         end: new Date(2015, 3, 10),
//     },

//     {
//         id: 2,
//         title: 'DTS STARTS',
//         start: new Date(2016, 2, 13, 0, 0, 0),
//         end: new Date(2016, 2, 20, 0, 0, 0),
//     },

//     {
//         id: 3,
//         title: 'DTS ENDS',
//         start: new Date(2016, 10, 6, 0, 0, 0),
//         end: new Date(2016, 10, 13, 0, 0, 0),
//     },

//     {
//         id: 4,
//         title: 'Some Event',
//         start: new Date(2015, 3, 9, 0, 0, 0),
//         end: new Date(2015, 3, 10, 0, 0, 0),
//     },
//     {
//         id: 5,
//         title: 'Conference',
//         start: new Date(2015, 3, 11),
//         end: new Date(2015, 3, 13),
//         desc: 'Big conference for important people',
//     },
//     {
//         id: 6,
//         title: 'Meeting',
//         start: new Date(2015, 3, 12, 10, 30, 0, 0),
//         end: new Date(2015, 3, 12, 12, 30, 0, 0),
//         desc: 'Pre-meeting meeting, to prepare for the meeting',
//     },
//     {
//         id: 7,
//         title: 'Lunch',
//         start: new Date(2015, 3, 12, 12, 0, 0, 0),
//         end: new Date(2015, 3, 12, 13, 0, 0, 0),
//         desc: 'Power lunch',
//     },
//     {
//         id: 8,
//         title: 'Meeting',
//         start: new Date(2015, 3, 12, 14, 0, 0, 0),
//         end: new Date(2015, 3, 12, 15, 0, 0, 0),
//     },
//     {
//         id: 9,
//         title: 'Happy Hour',
//         start: new Date(2015, 3, 12, 17, 0, 0, 0),
//         end: new Date(2015, 3, 12, 17, 30, 0, 0),
//         desc: 'Most important meal of the day',
//     },
//     {
//         id: 10,
//         title: 'Dinner',
//         start: new Date(2015, 3, 12, 20, 0, 0, 0),
//         end: new Date(2015, 3, 12, 21, 0, 0, 0),
//     },
//     {
//         id: 11,
//         title: 'Birthday Party',
//         start: new Date(2015, 3, 13, 7, 0, 0),
//         end: new Date(2015, 3, 13, 10, 30, 0),
//     },
//     {
//         id: 12,
//         title: 'Late Night Event',
//         start: new Date(2015, 3, 17, 19, 30, 0),
//         end: new Date(2015, 3, 18, 2, 0, 0),
//     },
//     {
//         id: 12.5,
//         title: 'Late Same Night Event',
//         start: new Date(2015, 3, 17, 19, 30, 0),
//         end: new Date(2015, 3, 17, 23, 30, 0),
//     },
//     {
//         id: 13,
//         title: 'Multi-day Event',
//         start: new Date(2015, 3, 20, 19, 30, 0),
//         end: new Date(2015, 3, 22, 2, 0, 0),
//     },
//     {
//         id: 14,
//         title: 'Today',
//         start: new Date(new Date().setHours(new Date().getHours() - 3)),
//         end: new Date(new Date().setHours(new Date().getHours() + 3)),
//     },
//     {
//         id: 15,
//         title: 'Point in Time Event',
//         start: now,
//         end: now,
//     },
// ]


const Button = styled(B)`
    @media (min-width: 576px) { 
        &.btn-block{
            display: inline-block !important;
            width: auto !important;
        }
    }
`

const Index = () => {
    const { edges: postEdges } = useLatestEvents();
    const { execom } = useExecom().edges[0].node;
    return (
        // <Layout>
        <>
            <Helmet title={config.siteTitle} />
            <SEO />
            {/* <PostListing postEdges={postEdges} /> */}
            <Row>
                <Col>
                    <h3 className="boxed">
                        <span>IEEE SB GCEK</span>
                    </h3>
                    <div className="boxed-content">
                        <p>
                            The IEEE Student Branch of GCEK came into existence
                                on 5<sup>th</sup> June 2009. Since then we have conducted several
                        programs for the benefit of students.
                        The IEEE Head Quarters is regularly conducting contests in various
                        category in which students can participate. These are conducted globally
                                and the students get a chance to compete with students from Universities from other parts of the world.<br />
                            Our IAS and PELS chapters were officially inaugurated by Dr. Sanjeeb Kumar Panda, Director of Power and
                            Energy Section On March 11, 2019. It mainly focused on industry leadership in energy conservation and
                            environmental ,health issues. Several activities were organised under these chapters which got great
                                appreciation from the student members as well as from the teachers.<br />
                            The goal of the Student Branch is to provide a platform for the students where they can develop
                            co-curricular skills. The Student Branch stands for increasing the awareness of students
                            in co-academic matters, supplement their studies and help them reach higher professional
                            standards. It is hoped that the activities of the Student Branch will generate a genuine
                            interest among the students in their studies.
                            </p>
                    </div>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col>
                    <h3 className="boxed">
                        <span>Execom Members</span>
                    </h3>
                    <Row className="boxed-content">
                        {
                            execom.map(({ execomName, execomColor, chair }, key) => {
                                let designation;
                                if (execomName.toLowerCase() !== "student branch")
                                    designation = execomName.split(" ")[0] + " " + chair.designation;
                                else
                                    designation = "SB " + chair.designation;
                                return (
                                    <Col md={6} lg={3} key={key} className="pb-4 pb-md-0">
                                        <Member name={chair.name} designation={designation} borderTopColor={execomColor}
                                            image={chair.image} />
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row className="mt-4">
                        <Col>
                            <Button href="/execom-members" block>See all members</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={12} lg={8} className="py-2 py-lg-0">
                    <Row>
                        <Col>
                            <h3 className="boxed">
                                <span>Events</span>
                            </h3>
                            <Row>
                                {
                                    postEdges.map(({ node }, key) => {
                                        let featuredImage = node.frontmatter.featuredImage;
                                        return (
                                            <Col key={key} sm={12} md={6} md={6} className="pt-4">
                                                <a href={node.fields.slug}>
                                                    <GatsbyImage
                                                        image={featuredImage.childImageSharp.thumbnail}
                                                        alt={node.frontmatter.title}
                                                        title={node.frontmatter.title} />
                                                </a>
                                            </Col>
                                        );
                                    })

                                }
                            </Row>
                            <Row className="mt-4">
                                <Col>
                                    <Button href="/events" block>See all Events</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md={12} lg={4} className="py-2 py-lg-0">
                    <Sidebar />
                </Col>
            </Row>
            {/* </Layout> */}
        </>
    );
}

export default Index;
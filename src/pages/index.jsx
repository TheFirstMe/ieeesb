import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../layout";
import PostListing from "../components/PostListing/PostListing";
import { useExecom } from "../components/Hooks/Execom";
import { useLatestPosts } from "../components/Hooks/MarkdownPosts";
import SEO from "../components/SEO/SEO";
import Img from "gatsby-image";
import config from "../../data/SiteConfig";
import { Container, Row, Col, Button } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import Calendar from "../components/Calendar/Calendar";
import { Member } from "../components/ExecomMembers/ExecomMembers";


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

const Index = () => {
    const postEdges = useLatestPosts().edges;
    const {execom} = useExecom(true).edges[0].node;
    return (
        <Layout>
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
                            execom.map(({ execomName, execomColor, chair },key) => {
                                let designation;
                                if (execomName.toLowerCase() !== "student branch")
                                    designation = execomName.split(" ")[0] + " " + chair.designation;
                                else
                                    designation = "SB " + chair.designation;
                                return (
                                    <Col md={3} key={key} className="pb-4 pb-md-0">
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
                    {/* <Row>
                        <Col>
                            <h3 className="boxed">
                                <span>Upcoming Events</span>
                            </h3>
                            <Row className="mt-4">
                                <Col>
                                    <Filler />
                                </Col>
                            </Row>
                        </Col>
                    </Row> */}
                    <Row>
                        <Col>
                            <h3 className="boxed">
                                <span>Events</span>
                            </h3>
                            <Row>
                            {
                                postEdges.map(({node},key) => {
                                    let featuredImage = node.frontmatter.featuredImage;
                                    return(
                                        <Col key={key} sm={12} md={6} md={6} className="pt-4">
                                    <a href={node.fields.slug}>
                                        <Img 
                                            sizes={{...featuredImage.childImageSharp.fluid, aspectRatio: 5/3}}                                        
                                            fluid={featuredImage.childImageSharp.fluid} 
                                            placeholderStyle={{ filter: "blur(20px)" }}
                                        />
                                    </a>
                                </Col>
                                    )
                                })
                                
                            }
                            </Row>
                            
                            {/* <Row className="mt-4">
                                <Col sm={12} md={6}>
                                    <a href={postEdges[0].node.fields.slug}>
                                        <Img
                                        sizes={{...postEdges[0].node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 16 / 9}}
                                        fluid={postEdges[0].node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </a>
                                </Col>
                                <Col sm={12} md={6} md={6} className="pt-4 pt-md-0">
                                    <a href={postEdges[1].node.fields.slug}>
                                        <Img fluid={postEdges[1].node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </a>
                                </Col>
                            </Row>
                            <Row className="mt-4">
                                <Col sm={12} md={6}>
                                    <a href={postEdges[2].node.fields.slug}>
                                        <Img fluid={postEdges[2].node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </a>
                                </Col>
                                <Col sm={12} md={6} className="pt-4 pt-md-0">
                                    <a href={postEdges[3].node.fields.slug}>
                                        <Img fluid={postEdges[3].node.frontmatter.featuredImage.childImageSharp.fluid} />
                                    </a>
                                </Col>
                            </Row>*/}
                            <Row className="mt-4">
                                <Col>
                                    <a className="btn btn-primary btn-block" href="/events">See all Events</a>
                                </Col>
                            </Row> 
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

export default Index;
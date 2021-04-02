import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import { Row, Col, Button as B } from "react-bootstrap";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useExecom, useLatestEvents } from "../hooks";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import Sidebar from "../components/sidebar";
import { Member } from "../components/ExecomMembers/ExecomMembers";

const Button = styled(B)`
  @media (min-width: 576px) {
    &.btn-block {
      display: inline-block !important;
      width: auto !important;
    }
  }
`;

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
              The IEEE Student Branch of GCEK came into existence on 5
              <sup>th</sup> June 2009. Since then we have conducted several
              programs for the benefit of students. The IEEE Head Quarters is
              regularly conducting contests in various category in which
              students can participate. These are conducted globally and the
              students get a chance to compete with students from Universities
              from other parts of the world.
              <br />
              Our IAS and PELS chapters were officially inaugurated by Dr.
              Sanjeeb Kumar Panda, Director of Power and Energy Section On March
              11, 2019. It mainly focused on industry leadership in energy
              conservation and environmental ,health issues. Several activities
              were organised under these chapters which got great appreciation
              from the student members as well as from the teachers.
              <br />
              The goal of the Student Branch is to provide a platform for the
              students where they can develop co-curricular skills. The Student
              Branch stands for increasing the awareness of students in
              co-academic matters, supplement their studies and help them reach
              higher professional standards. It is hoped that the activities of
              the Student Branch will generate a genuine interest among the
              students in their studies.
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
            {execom.map(({ execomName, execomColor, chair }, key) => {
              let designation;
              if (execomName.toLowerCase() !== "student branch")
                designation =
                  execomName.split(" ")[0] + " " + chair.designation;
              else designation = "SB " + chair.designation;
              return (
                <Col md={6} lg={3} key={key} className="pb-4 pb-md-0">
                  <Member
                    name={chair.name}
                    designation={designation}
                    borderTopColor={execomColor}
                    image={chair.image}
                  />
                </Col>
              );
            })}
          </Row>
          <Row className="mt-4">
            <Col>
              <Button href="/execom-members" block>
                See all members
              </Button>
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
                {postEdges.slice(0, 4).map(({ node }, key) => {
                  let featuredImage = node.frontmatter.featuredImage;
                  return (
                    <Col key={key} sm={12} md={6} md={6} className="pt-4">
                      <a href={node.fields.slug}>
                        <GatsbyImage
                          image={getImage(featuredImage)}
                          alt={node.frontmatter.title}
                          title={node.frontmatter.title}
                        />
                      </a>
                    </Col>
                  );
                })}
              </Row>
              <Row className="mt-4">
                <Col>
                  <Button href="/events" block>
                    See all Events
                  </Button>
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
};

export default Index;

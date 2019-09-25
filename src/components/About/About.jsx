import React, { Component } from "react";
import "./About.scss";
import { Container, Row, Col } from "react-bootstrap";

const Filler = () => (
  <div className="w-100" style={{ height: "200px", backgroundColor: 'grey' }} >
  </div>
);

class About extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="boxed">
            <span>IEEE SB GCEK</span>
          </h3>
          <Row className="mt-4">
            <Col xs={12}>
              <p className="text-muted">
                IEEE, an association dedicated to advancing innovation and
                technological excellence for the benefit of humanity, is
                the world's largest technical professional society. It
                is designed to serve professionals involved in all
                aspects of the electrical, electronic, and computing
                fields and related areas of science and technology
                that underlie modern civilization. It mainly aims to
                expand and enable dynamic, nimble, flexible, and
                diverse communities to help individuals from around
                the world to share, collaborate, network, debate,
                and engage with one another.
                  </p>
              <p className="text-muted">
                The IEEE Student Branch of GCEK came into existence
                  on 5<sup>th</sup> June 2009. Since then we have conducted several
                      programs for the benefit of students.
                  </p>
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <h3 className="boxed">
            <span>Mission</span>
          </h3>
          <Row className="mt-4">
            <Col>
              <p className="text-muted">
                IEEE's core purpose is to foster technological innovation and excellence for the benefit of humanity
                  </p>
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <h3 className="boxed">
            <span>Vision</span>
          </h3>
          <Row className="mt-4">
            <Col>
              <p className="text-muted">
                IEEE will be essential to the global technical community and to technical professionals everywhere,
                and be universally recognized for the contributions of technology and of technical professionals
                in improving global conditions.
                  </p>
            </Col>
          </Row>
        </Col>

        <Col xs={12}>
          <h3 className="boxed">
            <span>Goals</span>
          </h3>
          <Row className="mt-4">
            <Col>
              <ul>
                <li>
                  <span className="text-muted">
                    Provide technically vital forums for the discussion, development, and dissemination of
                    authoritative knowledge related to traditional technologies, while focusing more of our
                     resources towards serving the professionals working on emerging and disruptive technologies.
                     </span>
                </li>
                <li>
                  <span className="text-muted">
                    Lead humanitarian efforts around the world to use technology to solve the world’s most challenging problems.
                     </span>
                </li>
                <li>
                  <span className="text-muted">
                    Leverage IEEE’s technology-related insight to provide governments, NGOs and other organizations,
                    and the public with innovative and practical recommendations to address public policy issues.
                     </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}

export default About;

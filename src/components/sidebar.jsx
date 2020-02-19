import React from 'react';
import { Row, Col } from "react-bootstrap";
import Calendar from "./Calendar/Calendar";
import LatestPosts from "./latest-posts";

const Primary = () => (
    <>
        <h3 className="boxed">
            <span>Membership</span>
        </h3>

        <div className="banner-wrapper mt-4">
            <h4>
                <span>Become a Member</span>
            </h4>
            <div className="banner-wrapper small">
                <p>Sign up today to get involved in IEEE SB GCEK.</p>
            </div>
            <a className="btn btn-yellow"
                href="https://www.ieee.org/go/join_student/"
                title="Join IEEE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginBottom: "45px" }}
            >
                Join IEEE
                                    </a>
        </div>
    </>
)


const Sidebar = ({ type = 'primary' }) => (
    <Row className="ml-lg-1 pt-4 pt-lg-0">
        <Col xs={12}>
            {
                (type === 'primary' && <Primary />)
                ||
                (type === 'secondary' && <LatestPosts />)
                ||
                <Primary />
            }
        </Col>
        <Col className="pt-4 pt-lg-0">
            <h3 className="boxed mb-4">
                <span>Calendar</span>
            </h3>
            <Calendar />
        </Col>
    </Row>
)

export default Sidebar;
import React, { Component } from "react";
import "./ExecomMembers.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Filler = () => (
    <div className="w-100" style={{ height: "200px", backgroundColor: 'grey' }} >
    </div>
);


const Member = () => {
    return (
        <Card style={{ marginTop: "60px" }} className="rounded-0">
            <div style={{ width: '120px', height: '120px', marginTop: "-60px"}} className="mx-auto">
                <img src={"holder.js/120x120?bg=#bbb"} className="rounded-circle showcase-img img-fluid" />
            </div>
            <Card.Body className="text-center py-5">
                <Card.Title>Member Name</Card.Title>
                <Card.Text>
                    Member Designation
    </Card.Text>
            </Card.Body>
        </Card>
    );
}
class ExecomMembers extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <h3 className="boxed">
                        <span>Student Branch</span>
                    </h3>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} className="pt-4">
                    <h3 className="boxed">
                        <span>IAS Chapter</span>
                    </h3>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} className="pt-4">
                    <h3 className="boxed">
                        <span>PELS Chapter</span>
                    </h3>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} className="pt-4">
                    <h3 className="boxed">
                        <span>WIE Chapter</span>
                    </h3>
                    <Row className="mt-4">
                        <Col md={4}>
                            <Member />
                        </Col>
                        <Col md={4}>
                            <Member />
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        );
    }
}

export default ExecomMembers;

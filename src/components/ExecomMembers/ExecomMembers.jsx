import React, { Component } from "react";
import "./ExecomMembers.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Img from "gatsby-image";
import { array } from "prop-types";

export const Member = ({
    name = 'Member Name',
    designation = 'Member Designation',
    borderTopColor = '#1e73be',
    image = 1
}) => {
    return (
        <Card style={{ borderTopColor: borderTopColor,height: "230px" }} className="member rounded-0">
            <div className="partial-border"></div>
            <div className="mx-auto showcase">
                {/* <img src={image} className="rounded-circle showcase-img img-fluid" /> */}
                <Img 
                    className="rounded-circle showcase-img" 
                    fluid={image.childImageSharp.fluid} 
                    // placeholderStyle={{ filter: "blur(15px)" }}
                    alt={name}
                    title={name}
                    backgroundColor="white"
                />
            </div>
            <Card.Body className="text-center my-3">
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {designation}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
class ExecomMembers extends Component {
    render() {
        const {execom} = this.props.members.node || this.props.members
        return (
            <>
                {
                    execom.map(({execomName, execomColor, chair, members},key) => {
                        let execomMembers = [].concat(members)
                        execomMembers.unshift(chair)
                        return (
                            <Row key={key} className="mb-5">
                                <Col>
                                    <h3 className="boxed">
                                        <span>{execomName}</span>
                                    </h3>
                                    <Row className="mt-5 mb-3">
                                            {
                                                execomMembers.map(({name,designation,image},key) => {
                                                    let md;
                                                    return (
                                                        <Col className="space" md={4} key={key}>
                                                            <Member name={name} designation={designation} borderTopColor={execomColor} image={image} />
                                                        </Col>
                                                    )
                                                })
                                            }
                                    </Row>
                                </Col>
                            </Row>
                        )
                    })
                }
            </>
        )
    }
}

export default ExecomMembers;

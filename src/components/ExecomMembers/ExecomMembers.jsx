import React, { Component } from "react";
import "./ExecomMembers.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Abhinav from "../../../data/images/execommembers/2019/SB/Abhinav.jpeg"
import Img from "gatsby-image";
import { array } from "prop-types";
const Filler = () => (
    <div className="w-100" style={{ height: "200px", backgroundColor: 'grey' }} >
    </div>
);

const image = "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20120%20120%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16da7803f28%20text%20%7B%20fill%3A%23858585%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16da7803f28%22%3E%3Crect%20width%3D%22120%22%20height%3D%22120%22%20fill%3D%22%23bbb%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2235%22%20y%3D%2264.8%22%3E120x120%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E";
const Image = ({src}) => (
    <img src={src} className="rounded-circle showcase-img img-fluid" />
)
export const Member = ({
    name = 'Member Name',
    designation = 'Member Designation',
    borderTopColor = '#1e73be',
    image = 1
}) => {
    return (
        <Card style={{ borderTopColor: borderTopColor,height: "230px" }} className="member rounded-0">
            <div className="mx-auto showcase">
                {/* <img src={image} className="rounded-circle showcase-img img-fluid" /> */}
                <Img className="rounded-circle showcase-img" fluid={image.childImageSharp.fluid} />
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
        const {execom} = this.props.members.node;
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

import React, { Component } from "react";
import "./ExecomMembers.scss";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Img from "gatsby-image";
// import { array } from "prop-types";
import { MdCall } from "react-icons/md";

export const Member = ({
  name = "Member Name",
  designation = "Member Designation",
  borderTopColor = "#1e73be",
  image,
  contact,
}) => {
  if (!image) {
    return null;
  }
  return (
    <Card
      style={{ borderTopColor: borderTopColor, height: contact ? 270 : 230 }}
      className="member rounded-0"
    >
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
        <Card.Text>{designation}</Card.Text>
        {contact && (
          <>
            {/* Contact: &nbsp; */}
            <Card.Text className="d-flex justify-content-center align-items-center">
                <MdCall /> &nbsp; <a href={`tel:+91${contact}`}>{contact}</a>
            </Card.Text>
            {/* <Card.Link href={`tel:+91${contact}`}>{contact}</Card.Link> */}
          </>
        )}
      </Card.Body>
    </Card>
  );
};
class ExecomMembers extends Component {
  render() {
    const { members, advisors } = this.props;
    const { execom } = members.node || members;

    return (
      <>
        {/*to be refactored */}
        <Row className="mb-5">
          <Col>
            <h3 className="boxed">
              <span>{advisors.title}</span>
            </h3>
            <Row className="mt-5 mb-3 justify-content-md-center">
              {advisors.members.map(
                ({ name, designation, image, contact, execomColor }, key) => {
                  return (
                    <>
                      {key === 0 && <Col className="space" md={4} />}
                      <Col className={`space ${key !== 0 ? null : 'mt-0'}`} md={4} key={key}>
                        <Member
                          name={name}
                          designation={designation}
                          contact={contact}
                          borderTopColor={execomColor}
                          image={image}
                        />
                      </Col>
                      {key === 0 && <Col className="space mt-0" md={4} />}
                    </>
                  );
                }
              )}
            </Row>
          </Col>
        </Row>

        {execom.map(({ execomName, execomColor, chair, members }, key) => {
          let execomMembers = [].concat(members);
          execomMembers.unshift(chair);
          return (
            <Row key={key} className="mb-5">
              <Col>
                <h3 className="boxed">
                  <span>{execomName}</span>
                </h3>
                <Row className="mt-5 mb-3">
                  {execomMembers.map(({ name, designation, image }, key) => {
                    let md;
                    return (
                      <Col className="space" md={4} key={key}>
                        <Member
                          name={name}
                          designation={designation}
                          borderTopColor={execomColor}
                          image={image}
                        />
                      </Col>
                    );
                  })}
                </Row>
              </Col>
            </Row>
          );
        })}
      </>
    );
  }
}

export default ExecomMembers;

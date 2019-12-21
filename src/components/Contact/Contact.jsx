import React, { Component, useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap';


const ContactForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit} method="POST" data-netlify="true" name="Contact Form" action="/thank-you">
      <input type="hidden" name="form-name" value="Contact Form" />
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="first name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name="last name"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" required name="email" />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tel" placeholder="Phone Number" required name="phone no"/>
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Comments" required name="comments" />
          <Form.Control.Feedback type="invalid" >
            Please provide some valid comments.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

class Contact extends Component {
  render() {
    return (
      <Row>
        <Col xs={12}>
          <h3 className="boxed">
            <span>Contact Us</span>
          </h3>
          <Row className="mt-4">
            <Col xs={12}>
              <ContactForm />
            </Col>
          </Row>
        </Col>
      </Row>
    )
  }
}

export default Contact;
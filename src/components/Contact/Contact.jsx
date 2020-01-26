import React, { Component, useState } from 'react';
import { Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useLegacyState } from '../Hooks'

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactForm = () => {
  const [validated, setValidated] = useState(false)
  const [formSubmit, setFormSubmit] = useState(false)
  const [error, setError] = useState(false)
  const [state, setState] = useLegacyState({})
  const handleChange = e => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setFormSubmit(false)
      setError(false)
      setValidated(true)
    }
    else {
      event.preventDefault();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => {
          setError(false)
          setValidated(false)
          setFormSubmit(true)
          form.reset()
        })
        .catch((error) => {
          setFormSubmit(false)
          setError(true)
          console.log(error)
        })
    }
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="Contact Form"
    >
      <input type="hidden" name="contact-form" value="Contact Form" />
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name="first name"
            onChange={handleChange}
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
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="validationCustom04">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            required
            name="phone no"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid phone number.
            </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
          <Form.Label>Comments</Form.Label>
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Comments"
            required
            name="comments"
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid" >
            Please provide some valid comments.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button type="submit">Submit</Button>
      {formSubmit &&
        <Alert className="mt-4" variant="success">
          Thank you for contacting us. We will get back to you as soon as possible.
        </Alert>}
      {error &&
        <Alert className="mt-4" variant="danger">
          An error occurred. Please try again.
        </Alert>}
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
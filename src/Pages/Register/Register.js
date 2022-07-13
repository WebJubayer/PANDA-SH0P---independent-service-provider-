import React from 'react';
import {Form, Button, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='mt-5'>
      Please Register to
      <h3>Photographer's Destination</h3>


      <Form className='mx-auto w-50'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an account? <strong><Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </strong></p>




    </div>

  );
};

export default Register;
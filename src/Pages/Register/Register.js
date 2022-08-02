import React from 'react';
import { useState } from 'react';
import {Form, Button, Row, Col, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import SocialLogin from '../Login/SocialLogin/SocialLogin';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from '../../firebase.init';

const Register = () => {

  const auth = getAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);

  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
    

  };

  const handleFormSubmit = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => {
      console.error(error)
    })
    event.preventDefault();
  }

  
  
  
  return (
    
    <div >
      <Container className='mt-5'>
      Please Register to
      <h3>Photographer's Destination</h3>


      <Form onSubmit={handleFormSubmit} className='mx-auto w-50'>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required/>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <p>Already have an account? <strong><Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </strong></p>
      <SocialLogin></SocialLogin>

      </Container>
    </div>

  );
};

export default Register;
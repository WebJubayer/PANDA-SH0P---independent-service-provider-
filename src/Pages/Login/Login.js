import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
    return (
        <div className='container w-50 mx-auto mt-5'>
            <h2 className='text-primary text-center mt-2'>Please Login</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 mx-auto d-block mb-2" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to Photographer's Destination? <strong><Link to="/register" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </strong></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'><strong className='text-decoration-none'>Reset Password</strong> </button> </p>

            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Login;
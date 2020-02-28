import React from "react";
import { Button, Form } from 'react-bootstrap/';
import '../App.css'
import './Login.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className='login_main main_div'>

            <h2>Login</h2>
            <p>Welcome back!</p>
            <Form className="login_form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <p>Not a member? Click <Link to="/register">here</Link> to register!</p>

                <Button variant="primary" type="submit">
                    Login
  </Button>
            </Form>
        </div>




    );
}
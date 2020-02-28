import React from "react";
import { Button, Form } from 'react-bootstrap/';
import '../App.css'
import './Login.css';

export default function Register() {
    return (
        <div className='login_main main_div'>

            <h2>Register</h2>
            <p className="text_light">Welcome to AOLI, we're glad to have you! fill out your details below to register</p>

            <Form className="login_form">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Have an access code?</Form.Label>
                    <Form.Control placeholder="Access Code" />
                    <Form.Text className="text-muted">If you don't have an access code don't worry</Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
  </Button>
            </Form>
        </div>




    );
}
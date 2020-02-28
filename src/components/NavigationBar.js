import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import logo from '../img/logo.png';
import './NavigationBar.css';
import '../App.css';
export default function NavigationBar() {
    return (
        <div className="main">
            <div class="logo_div">
                <Link to="/">
                <img src={logo} alt="Logo"></img>
                </Link>
            </div>
            <div className="login_div">
                <p>
                    <Link to="/login" style={{ textDecoration: 'none' }}>
                        Login
                  </Link></p>
                <p>
                    <Link to="/register" style={{ textDecoration: 'none' }}>
                        Register
                  </Link></p>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/odp">ODP</Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

import React from 'react';

import { NavLink } from 'react-router-dom';
import './css/LinksStyle.css';

export default function NavLinks() {
  return (
    <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/profile">Profile</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/questions">Questions</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/sign-up">Sign Up</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/sign-in">Sign In</NavLink>
            </li>
        </ul>
  )
}

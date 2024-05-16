import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
// import logo from "../../assets/logo.png";

export const Navbar = () => {
    return (
        <nav>
            <div className="navContainer">
            {/* <img src={logo} className="logo-light" alt="logo" /> */}
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/courses">Courses</NavLink>
                    </li>
                    <li>
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

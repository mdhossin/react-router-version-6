import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navigation.module.css'
const Navigation = () => {
   
    return (
        <div>
            <ul>
                <li>
                    <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/home">Home</NavLink>
                </li>
                <li>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })}to="/about">About</NavLink>
                </li>
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
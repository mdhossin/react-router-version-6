import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './About.css'

const About = () => {

    
    return (
        <div>
            <h1>This is a about us page</h1>
            <ul >
                <li style={{textDecoration:'none'}}><Link style={{textDecoration: 'none'}} to="/about">Posts</Link></li>
                <li style={{textDecoration:'none'}}><Link style={{textDecoration: 'none'}} to="/about/post-1">Post 1</Link></li>
                <li><Link to="/about/post-2">Post 2</Link></li>
                <li><Link to="/about/post-3">Post 3</Link></li>
                <li><Link to="/about/post-4">Post 4</Link></li>
              
            </ul>
            <Outlet />
        </div>
    );
};

export default About;
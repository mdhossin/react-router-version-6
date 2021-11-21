import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>Page not found go back to home page <Link to="/home">Home</Link></h1>
        </div>
    );
};

export default NotFound;
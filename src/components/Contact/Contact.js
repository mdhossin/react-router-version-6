import React from 'react';
import { Outlet, Route, Routes } from 'react-router';

const Contact = () => {
    return (
        <div>
            <h1>This is a Contact us page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;
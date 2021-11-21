import React from "react";
import { Outlet, Route, Routes } from "react-router";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <div>
      <h1>Nested routeing here</h1>
      <Link to="/about/post">Details</Link>
      <Outlet></Outlet>
    </div>
  );
};

export default Posts;

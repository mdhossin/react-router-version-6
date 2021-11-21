import React from "react";
import { Link } from "react-router-dom";

const Service = ({ user }) => {
  const { name, username, email, id } = user;
  return (
    <div>
      <div>
          <p>{id}</p>
          <h1>Name: {name}</h1>
          <h3>{username}</h3>
          <p>{email}</p>
          <Link to={`/service/${id}`}>
          <button>Show Detail</button></Link>
      </div>
    </div>
  );
};

export default Service;

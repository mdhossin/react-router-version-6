import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useState } from "react/cjs/react.development";

const ShowDetail = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, [id]);
  return (
    <div>
      <h1>Show Details {id}</h1>
      {loading ? (
        "loading...."
      ) : (
        <div>
          <h1>{user?.username}</h1>
          <p>Email : {user?.email}</p>
        </div>
      )}
    </div>
  );
};

export default ShowDetail;

import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css'
const Services = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
            setLoading(false)
        }).catch((error) => console.log(error))

    },[])
    return (
        <div>
            <h1>This is a services page</h1>
            {
                loading ? 'Loading....' : <div className="grid">
                    {
                        posts?.map(user => <Service key={user.id} user={user}></Service>)
                    }
                </div> 
            }
        </div>
    );
};

export default Services;
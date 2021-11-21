import React from 'react';
import { useNavigate } from 'react-router';

const PostOne = () => {
    const navigate = useNavigate()
    const goBack = () => {
        // navigate('/about', {
        //     replace: true
        // })

        navigate(-1)
    }
    return (
        <div>
            <h1>This is Post one page</h1>
            <button onClick={goBack}>Go back posts</button>
        </div>
    );
};

export default PostOne;
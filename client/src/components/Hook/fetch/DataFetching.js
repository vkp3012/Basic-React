import React, { useEffect, useState } from 'react';
import axios from "axios";

function DataFetching() {
    // const [posts,setPosts] = useState([])
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1)

    useEffect(()=>{
        axios
            // .get("https://jsonplaceholder.typicode.com/posts")
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then(res =>{
                console.log(res);
                // setPosts(res.data)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    },[idFromButtonClick])

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    return (
        <div>
            <input type='text' placeholder='Type ID' value = {id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <h3>{post.title}</h3>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
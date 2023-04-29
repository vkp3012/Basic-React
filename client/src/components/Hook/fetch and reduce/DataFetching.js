import React, { useEffect, useState } from 'react'
import axios from "axios"
function DataFetching() {
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState()
    const [post,setPost] = useState([])

    useEffect(()=>{
        axios
            .get("https://jsonplaceholder.typicode1.com/posts/1")
            .then(response => {
                setLoading(false)
                setPost(response.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError("Something went Wrong!")
            })
    },[])

    return (
        <div>
            { loading ? 'Loading...' : post.title}
            { error ? error : null }

        </div>
    )
}

export default DataFetching
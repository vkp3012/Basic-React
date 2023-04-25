import React, { useState } from "react"

const MessageStateHook = () => {
    const [state,setState] = useState("Hello Visitor")
    const MessageChange=()=>{
        setState("Thanks for subscribe")
    }
    return (
        <div>
            <h1> {state}</h1>
            <button
                onClick={MessageChange}
            >
                Subscribe
            </button>
        </div>
    )
}

export default MessageStateHook
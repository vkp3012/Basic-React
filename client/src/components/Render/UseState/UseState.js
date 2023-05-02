import React, { useState } from 'react'

export const UseState = () => {
    const [count,setCount] = useState(0);
    console.log("Rendering USeState");
    return (
        <div>
            <button onClick={()=>setCount(c=>c+1)}>Count = {count}</button>
        </div>
    )
}

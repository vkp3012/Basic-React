import React, { useState } from 'react'
const initialValue = 0

const Counter = () => {
    const [count,setCount] = useState(initialValue);

    const increment = () => {
        setCount(prevCount => prevCount + 1)
    }

    const decrement = () => {
        if(count === 0){
            return initialValue;
        }

        setCount(prevCount => prevCount - 1)
    }

    const reset = () => {
        setCount(initialValue)
    }

    return (
        <div
            style={{
                display:"flex",
                flexDirection:"column",
                width:"100px"
            }}
        >
            <h5>Count - {count}</h5>
            <div       
            >
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Counter

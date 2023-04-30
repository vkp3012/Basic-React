import React from 'react'
import useCounter from './useCounter'

function CounterTwo() {
    const [count,increment,decrement,reset] = useCounter(10,10)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo
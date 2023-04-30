import React  from 'react'
import useCounter from './useCounter'

function CounterOne() {
    const [count,increment,decrement,reset] = useCounter(0,2)
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterOne
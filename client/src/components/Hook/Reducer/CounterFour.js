import React, { useReducer } from "react"

const initialState = 0;
const reducer = (state,action) => {
    switch(action){
        case "inc":
            return state + 1
        case "dec":
            return state - 1
        case "reset":
            return initialState
        default :
            return state    
    }
}

const CounterFour = () => {
    const [count,dispatch] = useReducer(reducer,initialState)
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState)
    return (
        <div>
            <div>
                <h2> First Count - {count}</h2>
                <button type="button" onClick={()=>dispatch("inc")}>Increment</button>
                <button type="button" onClick={()=>dispatch("dec")}>Decrement</button>
                <button type="button" onClick={()=>dispatch("reset")}>Reset</button>
            </div>
            <div>
            <h2> First Count - {countTwo}</h2>
                <button type="button" onClick={()=>dispatchTwo("inc")}>Increment</button>
                <button type="button" onClick={()=>dispatchTwo("dec")}>Decrement</button>
                <button type="button" onClick={()=>dispatchTwo("reset")}>Reset</button>
            </div>
        </div>
    )
}

export default CounterFour
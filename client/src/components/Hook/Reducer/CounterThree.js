import React, { useReducer } from "react"

const initialState = {
    firstCount : 0
}

const reducer = (state,action) => {
    switch(action.type){
        case "inc":
            return {firstCount : state.firstCount + 1}
        case "dec":
            return {firstCount : state.firstCount - 1}
        case "reset":
            return initialState
        default:
            return state
    }
}
function CounterThree() {
    const [count,dispatch] = useReducer(reducer,initialState)
    return (
        <>
            <h3>Count - {count.firstCount}</h3>
            <button type="button" onClick={()=>dispatch({type : "inc"})}>Increment</button>
            <button type="button" onClick={()=>dispatch({type:"dec"})}>Decrement</button>
            <button type="button" onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </>
    )
}

export default CounterThree
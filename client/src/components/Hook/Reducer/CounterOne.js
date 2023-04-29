import React, { useReducer } from 'react'


//initial state a object use type
const initialState = {
    firstCount : 0,
    secondCounter : 10
}

const reducer = (state,action) => {
    switch(action.type){
        case "increment":
            return { ...state,firstCount : state.firstCount + action.value}
        case "decrement":
            return { ...state,firstCount : state.firstCount - action.value}
        case "increment2":
            return { ...state,secondCounter : state.secondCounter + action.value}
        case "decrement2":
            return { ...state,secondCounter : state.secondCounter - action.value}
        case "reset":
            return initialState
        default :
            return state
    }
}
function CounterOne() {
    const [count,dispatch] = useReducer(reducer,initialState)

    return (
        <div>
            <h3>First Count - {count.firstCount}</h3>
            <h3>Second Count - {count.secondCounter}</h3>
            <button onClick={()=>dispatch({type:"increment" ,value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:"increment" ,value:5})}>IncrementFive</button>
            <button onClick={()=>dispatch({type:"decrement",value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:"decrement",value:5})}>DecrementFive</button>
            <div>
                <button onClick={()=>dispatch({type:"increment2" ,value:1})}>Increment Counter 2</button>
                <button onClick={()=>dispatch({type:"decrement2" ,value:1})}>Decrement Counter 2</button>
            </div>
            <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
        </div>
    )
}

export default CounterOne
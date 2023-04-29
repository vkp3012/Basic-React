import React, { useContext } from 'react'
import { CountContext } from "./ReducerContext"
function ComponentE() {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component E - {countContext.countState}
            <button type="button" onClick={()=>countContext.countDispatch("increment")}>Increment</button>
            <button type="button" onClick={()=>countContext.countDispatch("decrement")}>Decrement</button>
            <button type="button" onClick={()=>countContext.countDispatch("reset")}>Reset</button>
        </div>
    ) 
}

export default ComponentE
import React, { useState } from 'react'
import HookEffectCounter from './HookEffectCounter'

function MouseContainer() {
    const [toggle,setToggle] = useState(true)
    return (
        <div>
            <button onClick={()=>setToggle(!toggle)}>Toggle Display</button>
            {
                toggle && <HookEffectCounter/>
            }
        </div>
    )
}

export default MouseContainer
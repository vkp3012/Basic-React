import React from 'react'

function MemoComp({name}) {
    console.log("Memo Components Rendering");
    return (
        <div>{name}</div>
    )
}

export default React.memo(MemoComp)
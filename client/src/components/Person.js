import React from 'react'

function Person({person}) {
    return (
        <div>
            <h1>I am {person.name}.I am {person.age} year old. My skill is {person.Skill}</h1>
        </div>
    )
}

export default Person
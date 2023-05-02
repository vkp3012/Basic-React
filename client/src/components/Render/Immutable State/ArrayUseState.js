import React, { useState } from 'react'
const initialState = ["Bruce","Wayne"]

export const ArrayUseState = () => {
    const [persons,setPersons] = useState(initialState)

    const handleClick = () => {
        // persons.push("clark")
        // persons.push("Kent")
        // setPersons(persons)
        const newPerson = [...persons]
        newPerson.push("Clark")
        newPerson.push("Kent")
        setPersons(newPerson)
    }
    console.log("ArrayUseState Rendering");
    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <div>
                {
                    persons.map(person => (
                        <div key={person}>{person}</div>
                    ))
                }
            </div>
        </div>
    )
}

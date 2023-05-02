import React, { useState } from 'react'

const initialState = {
    firstName : 'Bruce',
    lastName : 'Wayne'
}
export const ObjectUseState = () => {
    const [person,setPerson] = useState(initialState)

    const changeName = () => {
        // person.firstName = "Clark"
        // person.lastName = "Kent"
        // setPerson(person)

        const newPerson = {...person}
        newPerson.firstName = "Clark"
        newPerson.lastName = "Kent"
        setPerson(newPerson)
    }

    console.log("ObjectUseState Render");

    return (
        <div>
            <button onClick={changeName}>{person.firstName} {person.lastName}</button>
        </div>
    )
}

import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ["Bruce","Clark","Diana"]
    // const nameList = names.map(name=><h2>{name}</h2>)

    const persons = [
        {
            id:1,
            name:"Bruce",
            age:57,
            Skill :"React"
        },
        {
            id:2,
            name:"Clark",
            age:47,
            Skill :"Angular"
        },
        {
            id:3,
            name:"Diana",
            age:37,
            Skill :"Git"
        },
    ]
    const personList = persons.map(person => 
            <Person key={person.id} person={person}/>
        )
    return (
        <div>
            {/* first Method */}
            {/* <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2> */}

            {/* map method */}
            {/* {
                names.map(name=><h2>{name}</h2>)
            } */}

            {personList}
        </div>
    )
}

export default NameList
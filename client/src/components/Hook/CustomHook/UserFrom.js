import React, { useState } from 'react'
import useInput from './useInput'

function UserFrom() {

    const [firstName,resetFirstName,bindFirstName] = useInput('')
    const [lastName,resetLastName,bindLastName] = useInput('')

    const handleSubmit = e => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type='text'
                        {...bindFirstName}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type='text'
                        {...bindLastName}
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default UserFrom
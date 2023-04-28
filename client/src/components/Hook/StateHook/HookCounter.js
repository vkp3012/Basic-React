import React, { useState } from 'react'

function HookCounter() {
    const initialValue = 0
    const [count,setCount] = useState(initialValue)
    const [ name, setName ] = useState({
        firstName: " ",
        lastName : " "
    })

    const [items,setItems] = useState([])

    const decrement = () => {
        setCount(count - 1);

        if(count === 0){
            return setCount(initialValue);
        }
    }

    const incrementFive = () => {
        for(let i = 0;i<5;i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    const typeLastName = e => {
        setName({...name, lastName : e.target.value})
    } 

    const addItem = () => {
        setItems([...items,{
            id:items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <h1> Hook State</h1>
            <div>
                <h4>Count Value</h4>
                <h4>Count : {count}</h4>
                <button onClick={()=>setCount(initialValue)}>Reset</button>
                <button onClick={()=>setCount(count+1)}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={incrementFive}>Increment5</button>
            </div>
            <div>
                <h4>Form: - Hook Object</h4>
                <form>
                    <input 
                        type='test' 
                        placeholder='First Name'
                        value={name.firstName}
                        onChange={e => setName({...name, firstName : e.target.value})}
                    />
                    <input 
                        type='test' 
                        placeholder='Last Name'
                        value={name.lastName}
                        onChange={typeLastName}
                    />
                    <h5>Your First Name is - {name.firstName}</h5>
                    <h5>Your Last Name is - {name.lastName}</h5>
                    {/* <h2>{JSON.stringify(name)}</h2> */}
                </form>
            </div>
            <div>
                <h3>Hook Array</h3>
                <div>
                    <button onClick={addItem}>Add A Number</button>
                    <ul>
                        {
                            items.map(item => (
                                <li key={item.id}>{item.value}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HookCounter
import React, { useState } from 'react'

const Todo = () => {
    const [inputData,setInputData] = useState("")
    const [items,setItems] = useState([])

    const addTodo = e => {
        if(!inputData){

        }else{
            const allInputData = { id: new Date().getTime().toString(),name:inputData}
            setItems([...items,allInputData])
            setInputData("")
        }
    }

    return (
        <div>
            <h1>Todo APP</h1>
            <div className='d-flex'>
                <form> 
                    <input 
                        type='text'
                        placeholder='Type Something.....👨‍💻'
                        value = {inputData}
                        onChange={e=>setInputData(e.target.value)}
                    />
                </form>
                    <button onClick={addTodo}>Add Todo List</button>
            </div>
            <div>
                {
                    items.map((elem) => {
                        return (
                            <div key={elem.id}>
                                <h5>{elem.name}</h5>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo

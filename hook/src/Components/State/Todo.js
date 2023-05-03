import React, { useState } from 'react'

const Todo = () => {
    const [input,setInput] = useState('');
    const [items,setItems] = useState([])
    const [edits,setEdits] = useState(null)
    const [toggle,setToggle] = useState(true)

    const changeInput = (e) => {
        setInput(e.target.value)
    }

    const addTodo = e => {
        e.preventDefault();
        if(!input){
            alert("!please Write a someThing Todo Input...")
        }else if(input && !toggle){
            setItems(
                items.map((elem) => {
                    if(elem.id === edits){
                        return {...elem, name:input}
                    }
                    return elem;
                })
            )
            setToggle(true)
            setInput("")
            setEdits(null)
        }else{
            const allInputData = {id:new Date().getTime().toString(),name:input}
            setItems([...items, allInputData])
            setInput("")
        }
    }

    const deleteItem = (id) => {
        console.log("delete btn");
        const removeId = items.filter((item)=>{
            return item.id !== id
        }) 
        setItems(removeId)
    }

    const editItem = (id) => {
        console.log("edit button");
        // setEdits(true)
        const editTask = items.find((item)=>{
            return item.id === id
        })
        setToggle(false)
        setInput(editTask.name)
        setEdits(id)        
    }

    return (
        <div className='todo'>
            <form>
                <div className='todo-Name'>
                    <h2>Todo App</h2>
                    <h4>Create A Todo List....📝</h4>
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Type something...✍️'
                        value={input}
                        onChange={changeInput}
                    />
                </div>
                {
                    toggle ? <button onClick={addTodo}>Submit</button> : <button onClick={addTodo}>Update</button>
                }
                    
            </form>

            <div>
                {
                    items.map((item)=>{
                        return (
                            <h3 key={item.id}>
                                {item.name}
                                <button onClick={()=>deleteItem(item.id)}>Delete</button>
                                <button onClick={()=>editItem(item.id)}>Edit</button>
                            </h3>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Todo

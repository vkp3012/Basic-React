import React, { useEffect, useState } from 'react'

const getLocalItem = () => {
    const list = localStorage.getItem("lists");
    if(list){
        return JSON.parse(localStorage.getItem("lists"))
    }else{
        return [];
    }
}
const TodoApp = () => {
    const [inputData,setInputData] = useState("")
    const [items,setItems] = useState(getLocalItem())
    const [editData,setEditData] = useState(null)
    const [toggle,setToggle] = useState(true)

    const handleClick = e => {
        e.preventDefault();
        if(!inputData){
            alert('!please Fill the Data...')
        }else if(inputData && !toggle){
            setItems(
                items.map((elem)=>{
                    if(elem.id === editData){
                        return {...elem,name:inputData}
                    }
                    return elem;
                })
            )
            setToggle(true)
            setInputData("")
            setEditData(null)
        }else{
            const allInputData = {id:new Date().getTime().toString(),name:inputData}
            setItems([...items,allInputData])
            setInputData("") 
        }
    }

    const handleDelete = (id) => {
        const deleteItem = items.filter((elem)=> {
            return elem.id !== id
        })
        setItems(deleteItem)
    }

    const handleEdit = (id) => {
        const updateData = items.find((item) => {
            return item.id === id
        })
        setToggle(false)
        setInputData(updateData.name)
        setEditData(id)
    }

    useEffect(()=>{
        localStorage.setItem("lists",JSON.stringify(items))
    },[items])

    return (
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-4 m-4'>
                    <form>
                        <div className='d-flex flex-column align-items-center'>
                            <h4>Todo APP</h4>
                            <h6>Create a Todo List 📝</h6>
                        </div>
                        <input
                            type='text'
                            placeholder='Type Something...✍️'
                            value={inputData}
                            onChange={e=>setInputData(e.target.value)}
                        />
                        <div className='d-flex justify-content-center'>
                            {
                                toggle ? <button onClick={handleClick}>Add Todo</button> :
                                <button onClick={handleClick}>Update Todo</button>
                            }
                        </div>
                    </form>
                </div>
                <div className='col-7 items'>
                    {
                        items.map((item)=> {
                            return(
                                <ul key={item.id} className='lists'>
                                    <li>{item.name}</li>
                                    <button className='btn btn-primary btn-sm m-3' onClick={()=>handleEdit(item.id)}>Edit</button>
                                    <button 
                                        onClick={()=>handleDelete(item.id)}
                                        className='btn btn-primary btn-sm'
                                    >
                                        Delete
                                    </button>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default TodoApp

import React, { useEffect, useState } from 'react'

function HookEffectCounter() {
    const [count,setCount] = useState(0);
    const [name,setName] = useState('')
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    const [timer,setTimer] = useState(0);

    // const tick = useCallback(() => {
        // setTimer(prevTimer => prevTimer + 1)
    // },[timer])
    
    const tick = () => {
        setTimer(timer+1)
    }

   
    useEffect(()=>{

        // function doSomething() {
        //     console.log(someProp);
        // }    
        // doSomething()
        const interval = setInterval(tick,1000)

        return () => {
            clearInterval(interval)
        }
    // },[someProp])
    },[])
    // })

    useEffect(()=>{
        console.log("Updating document title");
        document.title = `Click ${count} times`
    },[count])

    const logMousePosition = (e) => {
        console.log("Mouse Event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("UseEffect Called");
        window.addEventListener("mousemove",logMousePosition)

        return () => {
            console.log("Components Unmounting Code");
            window.removeEventListener("mousemove",logMousePosition)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div>
            <input type='text' placeholder='Name' value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>

            <h3>Hooks X - {x} Y - {y}</h3>

            <h4>{timer}</h4>
        </div>
    )
}

export default HookEffectCounter
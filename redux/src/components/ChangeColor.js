import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTheme } from '../redux/theme';

function ChangeColor() {
    const [color,setColor] = useState("");
    const dispatch = useDispatch();

    return (
        <div>
            <input
                type='text'
                onChange={(event)=>{
                    setColor(event.target.value)
                }}
                value={color}
            />
            <button onClick={()=>{
                dispatch(changeTheme(color))
            }}>
                Change Color
            </button>
        </div>
    )
}

export default ChangeColor
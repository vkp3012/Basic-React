import React from 'react'
import "./styleSheet.css"
function StyleSheet(props) {
    const className = props.primary ? "primary" : ''
    return (
        <div>
            <h1 className={`${className} font-xl`}>StyleSheet</h1>
        </div>
    )
}

export default StyleSheet
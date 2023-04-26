import React, { Component } from 'react'
import FRinput from './FRinput'

class FRParent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    handleClick = () => {
        this.inputRef.current.focus();
    }
    
    render() {
        return (
        <div>
            <FRinput ref={this.inputRef}/>
            <button onClick={this.handleClick}>Focus Input</button>
        </div>
        )
    }
}

export default FRParent
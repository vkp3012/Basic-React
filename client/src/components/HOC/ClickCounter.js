import React, { Component } from 'react'
import WithComponent from './WithCounter'
class ClickCounter extends Component {
    // constructor(props) {
    //     super(props)       
    //     this.state = {
    //         count : 0
    //     }
    // }

    // handleClick = () => {
    //     this.setState(prevState=>{
    //         return { count : prevState.count + 1 }
    //     })
    // }
    
    render() {
        // const { count } = this.state
        const {count,increment} = this.props
        return (
        <div>
            <button onClick={increment}>{this.props.name}Click {count} times</button>
        </div>
        )
    }
}

export default WithComponent(ClickCounter,5)
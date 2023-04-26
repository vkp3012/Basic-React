import React, { Component } from 'react'
import WithComponent from './WithCounter'
class HoverCounter extends Component {
    // constructor(props) {
    //     super(props)
        
    //     this.state = {
    //         count : 0
    //     }
    // }

    // increment = () => {
    //     this.setState(prevState => {
    //         return {count : prevState.count + 1}
    //     })
    // }
    
    render() {
        // const { count } = this.state
        const {count,increment} = this.props
        return (
        <div>
            <h2 onMouseOver={increment}>Hovered {count} times</h2>
        </div>
        )
    }
}

export default WithComponent(HoverCounter,10)
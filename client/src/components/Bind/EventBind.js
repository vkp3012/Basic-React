import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            message : "Hello"  
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler(){
    //     this.setState({
    //         message:"Bye"
    //     })
    //     console.log(this);
    // }

    clickHandler = () => {
        this.setState({
            message :" Bye"
        })
    }
    
    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
                {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind
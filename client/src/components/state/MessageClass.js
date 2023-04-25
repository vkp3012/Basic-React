import React, {Component}from "react"

class MessageClass extends Component{
    constructor(){
        super()
        this.state = {
            message: "Hello Visitor"
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank you for subscribing!"
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default MessageClass   
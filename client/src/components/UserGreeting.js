import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            isLoggedIn : false
        }
    }
    
    render() {
        
        //first method :- if/else
        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Vivek</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }
        // return (
        //     <div>
        //         <div>Welcome Vivek</div>
        //         <div>Welcome Guest</div>
        //     </div>       
        // )

        //second method : - Element variable
        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Vivek</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }

        // return <div>{message}</div>

        //third method :- Ternary Conditional Operator 
        // return(
        //     this.state.isLoggedIn ? (
        //         <div>Welcome Vive</div>
        //     ) : (
        //         <div>Welcome Guest</div>
        //     )
        // )

        //fourth method : - Short circuit Operator
        return this.state.isLoggedIn && <div>Welcome Vivek</div>
    }
}

export default UserGreeting
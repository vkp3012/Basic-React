import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name:"Vivek"
        }
        console.log("LifeCycleA Constructor");
    }

    // static Method 
    static getDerivedStateFromProps(state,props){
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleA ComponentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA ShouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate");
    }

    changeState=()=>{
        this.setState({
            name : "codeWithVivek"
        })
    }
    
    render() {
        console.log("LifeCycleA Render");
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB/>
            </div>
        )
    }
}

export default LifeCycleA
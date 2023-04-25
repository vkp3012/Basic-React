import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name:"Vivek"
        }
        console.log("LifeCycleB Constructor");
    }

    // static Method 
    static getDerivedStateFromProps(state,props){
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
    }

    componentDidMount(){
        console.log("LifeCycleB ComponentDidMount");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB ShouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate");
    }

    render() {
        console.log("LifeCycleB Render");
        return (
        <div>LifeCycleB</div>
        )
    }
}

export default LifeCycleB
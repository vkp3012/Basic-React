import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            name : "",
            x : 0,
            y : 0
        }
    }

    logMousePosition = e => {
        this.setState({
            x : e.clientX,
            y : e.clientY
        })
    }

    componentDidMount(){
        document.title = `clicked ${this.state.count} times`
        window.addEventListener('mousemove',this.logMousePosition)
    }

    componentWillUnmount() {
        window.removeEventListener("mousemove",this.logMousePosition)
    }

    componentDidUpdate(prevProps,prevState) {
        if(prevState.count !== this.state.count){
            console.log('Updating Document Title');
            document.title = `clicked ${this.state.count} times`
        }
    }
    
    render() {
        return (
        <div>
            <input
                type='text'
                placeholder='Name'
                value={this.state.name}
                onChange={e => this.setState({
                    name : e.target.value
                })}
            />
            <button
                onClick={()=>this.setState({count : this.state.count + 1})}
            >
                Click {this.state.count} Times
            </button>

            X - {this.state.x} Y - {this.state.y}
        </div>
        )
    }
}

export default ClassCounter
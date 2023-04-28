import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count : 0,
            firstName : " ",
            lastName : " "
        }
    }

    reset = () => {
        this.setState({
            count : 0
        })
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    decrement = () => {
        if(this.state.count === 0){
            return this.state.count
        }

        this.setState({
            count : this.state.count - 1
        })

    }

    incrementFive = () => {
        for(let i = 0;i<5;i++){
            this.setState(
                prevState => {
                    return {
                        count : prevState.count + 1
                    }
                } 
            )
        }
    }

    changeFirstName = (e) => {
        this.setState({
            firstName : e.target.value
        })
    }

    changeLastName = e => {
        this.setState({
            lastName : e.target.value
        })
    }


    render() {
        const {count} = this.state
        return (
        <div>
            <div>
                <h2>Class Components Function Count and Form Create</h2>
                <h1>Count : {count}</h1>
                <div>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                    <button onClick={this.incrementFive}>Increment5</button>
                </div>
            </div>
            <div>
                <h2>Form</h2>
                <form>
                    <div>
                        <input
                            type='text'
                            placeholder='firstName...'
                            value={this.state.firstName}
                            onChange={this.changeFirstName}
                        />
                        <input
                            type='text'
                            placeholder='firstName...'
                            value={this.state.lastName}
                            onChange={this.changeLastName}
                        />
                    </div>
                    <h4>My First Name is  : - {this.state.firstName}</h4>
                    <h4>My Last Name is  : - {this.state.lastName}</h4>
                </form>
            </div>
        </div>
        )
    }
}

export default ClassCounter
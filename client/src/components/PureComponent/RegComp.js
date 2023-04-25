import React, { Component } from 'react'

class RegComp extends Component {
    render() {
        console.log("Regular Components");
        return (
        <div>
            RegComp {this.props.name}
        </div>
        )
    }
}

export default RegComp
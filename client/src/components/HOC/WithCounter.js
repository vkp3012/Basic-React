import React from "react"

const WithComponent = (WrappedComponent,incrementNumber) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)
            
            this.state = {
                count : 0
            }
        }
    
        increment = () => {
            this.setState(prevState => {
                return {count : prevState.count + incrementNumber}
            })
        }
        render(){
            console.log(this.props.name);
            return (
                <WrappedComponent 
                    count={this.state.count}
                    increment = {this.increment}
                    {...this.props}
                />
            )
        }
    }
    return WithCounter
}

export default WithComponent
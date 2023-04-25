import React , { Component } from "react";

class Welcome extends Component {
    // render(){
    //     return (
    //         <div>
    //             <h1>
    //                 Welcome { this.props.name} a.k.a { this.props.heroName}
    //             </h1>
    //             {this.props.children}
    //         </div>
    //     )
    // }

    //destructing of props methods
    render(){
        const {name,heroName} = this.props
        return (
            <div>
                <h1>
                    Welcome {name} a.k.a {heroName}
                </h1>
                {this.props.children}
            </div>
        )
    }
}

export default Welcome
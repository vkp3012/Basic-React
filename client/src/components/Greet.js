import React from "react";

// Simple Functions Components
// function Greet(){
//     return (
//         <h1>Hello Vivek!</h1>
//     )
// }

// export const Greet = () => <h1>Hello Vivek!</h1>
// ES6 Methods 

const Greet = (props) => {
    return(
        <div>
            <h1>Hello {props.name} a.t.a {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet
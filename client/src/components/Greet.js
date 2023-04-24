import React from "react";

// Simple Functions Components
// function Greet(){
//     return (
//         <h1>Hello Vivek!</h1>
//     )
// }

// export const Greet = () => <h1>Hello Vivek!</h1>
// ES6 Methods 

// const Greet = (props) => {
//     return(
//         <div>
//             <h1>Hello {props.name} a.t.a {props.heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

//Destructing Method 0f props 
// const Greet = ({name,heroName}) => {
//     return(
//         <div>
//             <h1>Hello {name} a.t.a {heroName}</h1>
//             {/* {children} */}
//         </div>
//     )
// }

//Destructing Method 0f props 
const Greet = (props) => {
    const {name,heroName} = props
    return(
        <div>
            <h1>Hello {name} a.t.a {heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet
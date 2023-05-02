type GreetProp = {
    name : String,
    messageCount? : number,
    isLoggedIn : boolean
}

export const Greet = (props : GreetProp) => {
    const {messageCount=0} = props
    return (
        <div>
            {
                props.isLoggedIn ? 
                    // <h2>Welcome {props.name}! You have {props.messageCount} unread Message</h2> :
                    <h2>Welcome {props.name}! You have {messageCount} unread Message</h2> :
                    <h2>Welcome Guest</h2>
            }  
        </div>
    )
}
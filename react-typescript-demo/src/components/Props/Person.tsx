type personProps = {
    name : {
        first : String,
        last : String
    }
}

export const Person = (props : personProps) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}
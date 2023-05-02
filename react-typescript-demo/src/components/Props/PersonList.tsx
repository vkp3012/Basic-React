type personListProps = {
    names : {
        first : string,
        last : string
    }[]
}

export const PersonList = (props:personListProps) => {
    return (
        <div>
            {/* <h2>Bruce Wayne</h2>
            <h2>Clark Kent</h2>
            <h2>Princess Diana</h2> */}
            {
                props.names.map((name) => {
                    return (
                        <h2 key={name.first}>
                            {name.first}  {name.last}
                        </h2>
                    )
                })
            }
        </div>
    )
}
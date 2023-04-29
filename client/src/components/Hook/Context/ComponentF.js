import React from 'react'
import { UserContext,channelContext } from '../../../App'
const ComponentF = () => {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return (
                            <channelContext.Consumer>
                                {
                                    channel => {
                                        return <div>User Context Value {user},channel context value {channel}</div>
                                    }
                                }
                            </channelContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF

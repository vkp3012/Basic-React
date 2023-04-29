import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, channelContext } from '../../../App'

const ComponentE = () => {
    const user = useContext(UserContext)
    const channel = useContext(channelContext);
    return (
        <div>
            {user} - {channel}
            <ComponentF/>
        </div>
    )
}

export default ComponentE

import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfo from './DisplayInfo'
class MyComponent extends React.Component {

    render() {
        const myInfo = ['abc', 'def', 'gjk']

        return (
            <>
                <UserInfo />
                <DisplayInfo name='okokok' age='21' myInfo={myInfo} />
            </>
        )
    }
}

export default MyComponent
import React from 'react'
import UserInfo from './UserInfo'
import DisplayInfo from './DisplayInfo'
class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'okokok', age: 21 },
            { id: 2, name: 'rac', age: 11 },
            { id: 3, name: 'ahehe', age: 22 },
        ]
    }
    render() {

        return (
            <>
                <UserInfo />
                <DisplayInfo listUser={this.state.listUser} />
            </>
        )
    }
}

export default MyComponent
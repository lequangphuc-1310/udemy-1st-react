import React from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'
class MyComponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: 'okokok', age: 21 },
            { id: 2, name: 'rac', age: 11 },
            { id: 3, name: 'ahehe', age: 22 },
        ]
    }
    handleAddUser = (data) => {
        this.setState({
            listUser: [data, ...this.state.listUser]
        })
    }
    render() {

        return (
            <>
                <AddUserInfo
                    handleAddUser={this.handleAddUser}
                />
                <DisplayInfo listUser={this.state.listUser}
                />
            </>
        )
    }
}

export default MyComponent
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
    handleDeleteUser = (id) => {
        let cloneListUser = [...this.state.listUser]
        cloneListUser = cloneListUser.filter(item => item.id != id)
        this.setState({
            listUser: cloneListUser
        })
    }
    render() {

        return (
            <>
                <div className='a'>
                    <AddUserInfo
                        handleAddUser={this.handleAddUser}
                    />
                    <DisplayInfo listUser={this.state.listUser} handleDeleteUser={this.handleDeleteUser}
                    />
                </div>
                <div className='b'></div>
            </>
        )
    }
}

export default MyComponent
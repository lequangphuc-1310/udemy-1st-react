import React, { useState } from 'react'
import AddUserInfo from './AddUserInfo'
import DisplayInfo from './DisplayInfo'
const MyComponent = () => {
    const [listUser, setListUser] = useState([
        { id: 1, name: 'okokok', age: 21 },
        { id: 2, name: 'rac', age: 11 },
        { id: 3, name: 'ahehe', age: 22 },
    ]
    )
    const handleAddUser = (data) => {
        setListUser([data, ...listUser])
    }
    const handleDeleteUser = (id) => {
        let cloneListUser = [...listUser]
        cloneListUser = cloneListUser.filter(item => item.id !== id)
        setListUser(cloneListUser
        )
    }
    return (
        <>
            <div className='a'>
                <AddUserInfo
                    handleAddUser={handleAddUser}
                />
                <DisplayInfo listUser={listUser} handleDeleteUser={handleDeleteUser}
                />
            </div>
            <div className='b'></div>
        </>
    )
}

export default MyComponent
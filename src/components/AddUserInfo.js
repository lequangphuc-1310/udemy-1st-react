import React, { useState } from 'react'

const AddUserInfo = (props) => {
    const [state, setState] = useState({
        name: '',
        age: ''
    })

    const [name, setName] = useState('')
    const [age, setAge] = useState('')

    const handleOnChangeInput = e => {
        setName(e.target.value)
    }

    const handleOnChangeAge = e => {
        setAge(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age
        })

    }

    return (
        <>
            <form >
                <label>Enter ur name: </label>
                <input type='text' value={name} onChange={(e) => { handleOnChangeInput(e) }} /><br />
                <label>Enter ur age: </label>
                <input type='text' value={age} onChange={(e) => { handleOnChangeAge(e) }} /><br />
                <button onClick={e => { handleSubmit(e) }}>Submit</button>
            </form>
        </>
    )
}

export default AddUserInfo
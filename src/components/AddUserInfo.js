import React from 'react'

class AddUserInfo extends React.Component {
    state = {
        name: '',
        address: 'bai rac',
        age: ''
    }
    handleOnChangeInput = e => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: this.state.name,
            age: this.state.age
        })

    }
    handleOnChangeAge = e => {
        this.setState({ age: e.target.value })
    }
    render() {
        return (
            <>
                <form onClick={e => { this.handleSubmit(e) }}>
                    <label>Enter ur name: </label>
                    <input type='text' value={this.state.name} onChange={(e) => { this.handleOnChangeInput(e) }} /><br />
                    <label>Enter ur age: </label>
                    <input type='text' value={this.state.age} onChange={(e) => { this.handleOnChangeAge(e) }} /><br />
                    <button >Submit</button>
                </form>
            </>
        )
    }
}

export default AddUserInfo
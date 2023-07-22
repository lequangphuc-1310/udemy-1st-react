import React from 'react'

class UserInfo extends React.Component {
    state = {
        name: 'rac',
        address: 'bai rac',
        age: 18
    }
    handleOnChangeInput = e => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    handleOnChangeAge = e => {
        this.setState({ age: e.target.value })
    }
    render() {
        return (
            <>
                <div> Hello {this.state.name}, your age is {this.state.age}</div>
                <button onClick={e => { this.handleClick(e) }}>Click me</button>
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

export default UserInfo
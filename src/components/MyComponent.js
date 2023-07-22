import React from 'react'
class MyComponent extends React.Component {
    state = {
        name: 'rac',
        address: 'bai rac',
        age: 18
    }
    handleClick = (e) => {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)]
        this.setState({
            name: randomCharacter,
            age: Math.floor(Math.random() * 100)
        })
    }
    handleOnChangeInput = e => {
        this.setState({ name: e.target.value })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <>
                <div> Hello {this.state.name}, your age is {this.state.age}</div>
                <button onClick={e => { this.handleClick(e) }}>Click me</button>
                <form onClick={e => { this.handleSubmit(e) }}>
                    <input type='text' value={this.state.name} onChange={(e) => { this.handleOnChangeInput(e) }} />
                    <button >Submit</button>
                </form>
            </>

        )
    }
}

export default MyComponent
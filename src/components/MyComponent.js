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
    handleHover() {
        console.log('mouse over')
    }
    render() {
        return (
            <>
                <div> Hello {this.state.name}, your age is {this.state.age}</div>
                <button onClick={e => { this.handleClick(e) }}>Click me</button>
                <button onMouseOver={this.handleHover}>Hover me</button>

            </>

        )
    }
}

export default MyComponent
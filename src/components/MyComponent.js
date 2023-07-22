import React from 'react'
class MyComponent extends React.Component {
    state = {
        name: 'rac',
        address: 'bai rac'
    }
    handleClick() {
        console.log('I was clicked')
    }
    handleHover() {
        console.log('mouse over')
    }
    render() {
        return (
            <>
                <div> Hello n Mycomponent</div>
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleHover}>Hover me</button>

            </>

        )
    }
}

export default MyComponent
import React from 'react'

class DisplayInfo extends React.Component {
    state = { condition: true }
    handleShowHide = () => {
        this.setState({ condition: !this.state.condition })
    }
    render() {
        console.log(this.props)
        const { listUser } = this.props
        return (
            <>
                <div>
                    <button onClick={() => { this.handleShowHide() }}>{this.state.condition ? 'Hide' : "Show"}</button>
                </div>
                {this.state.condition &&
                    <div>{listUser.map(item => {
                        return (
                            <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                <div>My nem is: {item.name}</div>
                                <div>My age is: {item.age}</div>
                            </div>
                        )
                    })}
                    </div>
                }

            </>
        )
    }
}

export default DisplayInfo
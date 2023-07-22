import React from 'react'

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props)
        const { name, age, myInfo } = this.props
        return (
            <>
                <div>my name is: {name}</div>
                <div>my age is: {age}</div>
            </>
        )
    }
}

export default DisplayInfo
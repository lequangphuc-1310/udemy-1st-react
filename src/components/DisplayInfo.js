import React from 'react'

class DisplayInfo extends React.Component {
    render() {
        console.log(this.props)
        const { listUser } = this.props
        return (
            <>
                {listUser.map((user, index) => {
                    return (
                        <div key={index}>
                            <div>my nem is: {user.name}</div>
                            <div>my age is: {user.age}</div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export default DisplayInfo
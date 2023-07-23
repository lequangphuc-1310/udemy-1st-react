import React from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'
class DisplayInfo extends React.Component {
    constructor(props) {
        console.log('call constructor')
        super(props)
        this.state = { condition: true }
    }

    componentDidMount() {
        console.log('call componentDidMount')
        setTimeout(() => { document.title = 'rac ok' }, 3000)
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('call componentDidUpdate', this.props, 'prev props: ', prevProps)
        if (this.props.listUser !== prevProps.listUser) {
            if (this.props.listUser.length === 5) {
                alert('congrats')
            }
        }
    }

    handleShowHide = () => {
        this.setState({ condition: !this.state.condition })
    }
    render() {
        // console.log(this.props)
        const { listUser } = this.props
        return (
            <div className='display-info-container'>
                <img src={logo} />
                <div>
                    <button onClick={() => { this.handleShowHide() }}>{this.state.condition ? 'Hide' : "Show"}</button>
                </div>
                {this.state.condition &&
                    <>
                        {listUser.map(item => {
                            return (
                                <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                    <div>
                                        <div>My nem is: {item.name}</div>
                                        <div>My age is: {item.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => { this.props.handleDeleteUser(item.id) }}>&times;</button>
                                    </div>
                                </div>
                            )
                        })}
                    </>
                }

            </div>
        )
    }
}

export default DisplayInfo
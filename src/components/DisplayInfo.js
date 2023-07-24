import React, { useState, useEffect } from 'react'
import './DisplayInfo.scss'
import logo from './../logo.svg'
// class DisplayInfo extends React.Component {
//     constructor(props) {
//         console.log('call constructor')
//         super(props)
//         this.state = { condition: true }
//     }

//     handleShowHide = () => {
//         this.setState({ condition: !this.state.condition })
//     }
//     render() {
//         // console.log(this.props)
//         const { listUser } = this.props
//         return (
//             <div className='display-info-container'>
//                 <img src={logo} />
//                 <div>
//                     <button onClick={() => { this.handleShowHide() }}>{this.state.condition ? 'Hide' : "Show"}</button>
//                 </div>
//                 {this.state.condition &&
//                     <>
//                         {listUser.map(item => {
//                             return (
//                                 <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
//                                     <div>
//                                         <div>My nem is: {item.name}</div>
//                                         <div>My age is: {item.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => { this.props.handleDeleteUser(item.id) }}>&times;</button>
//                                     </div>
//                                 </div>
//                             )
//                         })}
//                     </>
//                 }

//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    const { listUser } = props

    const [isShowHide, setIsShowHide] = useState(false)
    const handleShowHide = () => setIsShowHide(!isShowHide)

    useEffect(() => {
        if (listUser.length == 0) {
            console.log('deleted all')
        }
        console.log('useEffect()')
    }, [listUser])

    return (
        <div className='display-info-container'>
            {console.log('render phase')}
            <img src={logo} /><br />
            <button onClick={handleShowHide}>{isShowHide === true ? 'Hide' : 'Show'}</button>
            {isShowHide &&
                <>
                    {listUser.map(item => {
                        return (
                            <div key={item.id} className={+item.age > 18 ? 'green' : 'red'}>
                                <div>
                                    <div>My nem is: {item.name}</div>
                                    <div>My age is: {item.age}</div>
                                </div>
                                <div>
                                    <button onClick={() => { props.handleDeleteUser(item.id) }}>&times;</button>
                                </div>
                            </div>
                        )
                    })}
                </>
            }

        </div>
    )
}

export default DisplayInfo
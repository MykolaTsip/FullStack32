import { Component } from 'react'
import cn from 'classnames'

import style from './Header.module.css'



class Header extends Component {

    state = {
        isStyle: false
    }

    changeStyle = () => {
        this.setState({isStyle: !this.state.isStyle})
    }

    render () {

        return (
            <div onClick={this.changeStyle}>
                <h2 
                // className='color-red'
                // className={this.state.isStyle && style.color_red}
                className={cn(style.color_red, style.fs_15, style.fw)}
                >
                 Header Header Header Header
                </h2>
            </div>
        )
    }
}

export default Header
import { Component } from 'react'

import Footer from './Footer';
import Header from './Header';


class Wrap extends Component {


    render () {

        return (
            <div>
                <Header></Header>
                <Footer></Footer>
            </div>
        )
    }
}

export default Wrap;
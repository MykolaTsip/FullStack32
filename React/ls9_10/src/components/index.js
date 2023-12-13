import { Component } from 'react'

export { Comp } from './Component'
export { Person, Comp as  CompPerson, a } from './Peson'
export { Content, Content2 } from './Content'

class Err extends Component {

    render () {

        return <div> Errrr Errr </div>
    }
}


export default Err;
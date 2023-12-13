import {Component} from 'react'



export class Comp extends Component {


    render () { return <div>Hellow Component 22222</div>}
}


export class Person extends Component {


    render () { return <div>Hellow Person</div>}
}

// export default {Person, Comp}; Bad practice
// export default Comp

export function a () {return 2+2}

function BBB () {return 4+2}

// export { Person, Comp }

export default BBB

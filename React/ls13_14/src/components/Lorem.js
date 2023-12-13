import { useContext } from 'react'
import { Lor } from '../App';

function Lorem() {
    
    let Lorem = useContext(Lor)

    return <div> Text {Lorem} </div>
}

export default Lorem;
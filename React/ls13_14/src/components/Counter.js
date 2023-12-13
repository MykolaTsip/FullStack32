import { useReducer } from 'react'

const COUNT_ACTIONS = {
    PLUS: 'plus',
    MUNUS: 'minus'
}


const initState = {
    count: 0
}

function countReducer(state, action) {
    switch (action) {
        case COUNT_ACTIONS.PLUS: return { count: state.count + 1 };
        // break;
        case COUNT_ACTIONS.MUNUS: return { count: state.count - 1 };
        // break;
        default: return 0;
    }
}

export function Counter () {

    const [state, dispatch] = useReducer(countReducer, initState)


    return (<div>
        <button onClick={() => dispatch(COUNT_ACTIONS.PLUS)} > Plus </button>
            Current value: { state.count }
        <button onClick={() => dispatch(COUNT_ACTIONS.MUNUS)}> Minus </button>

    </div>)

}
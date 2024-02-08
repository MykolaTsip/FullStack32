import { useState } from 'react';

const Counter = () => {

    const [count, setState] = useState(0);

    const addOne = () => setState(count+1);

    const addMinus = () => {
        
        if (count <= 0) return
        setState(count-1)
    }


    return (
        <div>
            <button onClick={addOne} data-testid="add"> Add ONE </button>
            <p> Count is: <span data-testid="count"> { count } </span> </p>
            <button onClick={addMinus} data-testid="minus"> Minus ONE </button>
        </div>
    )
}

export default Counter;
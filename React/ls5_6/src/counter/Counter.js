import React from 'react';


function Counter () {

    // let count = 0;
    // const bnt = document.getElementById('dd')
    // bnt.onclick(() => count + 1)

    const [count, setCount] = React.useState(0)

    const clicker = () => {

        setCount(count+1)
        // count =+ 1
        console.log(count);
    };

    const clickerM = () => {
        setCount(count-1)
        // count =- 1
        console.log(count);
    };


    const clickerM1 = () => {
        setCount(count-1)
        // count =- 1
        console.log(count);
    };


    return (<div>
        <button onClick={clicker}> ADD 1</button>
           <span> Count: {count} </span>
        <button onMouseDown={clickerM}> MINUS 1</button>
        <button onMouseUp={clickerM1}> MINUS 1</button>

    </div>)
}


export default Counter;
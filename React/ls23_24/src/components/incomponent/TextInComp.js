import { useContext } from 'react';

import { Counert } from '../../App';

export function Textincomp() {
    
    const data = useContext(Counert);


    console.log(data);

    return (
        <>
            <h2> Current counert is:</h2>
            <p> { data } </p>
        </>
    )
}
import { useEffect } from 'react';

import { useParams } from 'react-router-dom';

function User () {
    
    const par = useParams();

    useEffect(() => {
        console.log(par);
    })

    return (
        <div>
            <h1> Hello from user </h1>
        </div>
    )
}


export default User;
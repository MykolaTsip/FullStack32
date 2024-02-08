import { useState, useEffect } from 'react';

import { useNavigate, useSearchParams  } from 'react-router-dom';

// import { User as SingleUser } from './U';

import { users as User } from '../constants';

function AllU() {
    
    const [users, setU] = useState(User)

    const add = useSearchParams();
    const currentUser = useNavigate();

    
    const goUser = (id) => {

        currentUser(`${id}`)
    }

    useEffect(() => {
        console.log(add);
    })


    return ( 
        <div>
        { users.map((user, i) => (
            <div key={i}>
              <div> User with id: {user.id} </div>
  
              <button onClick={() => goUser(user.id)}> Go to user </button>
  
              { user.isShow && <div> <User {...user}/> </div>}
              <hr/>
            </div>)) }
        </div>
    )
}

export default AllU;
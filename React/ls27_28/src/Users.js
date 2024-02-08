import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { allUsers } from './store/actions';

export const Users = () => {

    const dispatch = useDispatch();

    const {users} = useSelector(state => state.gettingUsers);

    
    useEffect(() => {
        console.log(users);
        if (!users.length) {
            dispatch(allUsers())
        }

    })
    
    return (
        <div onClick={() => dispatch(allUsers())}>
            KFDKfm mg

            { users[0]?.name }
        </div>
    )
}
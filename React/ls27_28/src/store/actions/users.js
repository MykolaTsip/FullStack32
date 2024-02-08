import { USERS } from '../constants';

import { getUsers } from '../../services/user.service';

export const Users = (payload) => ({ type: USERS, payload });

export const allUsers = () => dispatch => getUsers()
        .then(data => data.json())
        .then(users => dispatch(Users(users)))
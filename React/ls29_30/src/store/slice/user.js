import { createSlice } from '@reduxjs/toolkit';

import { getUsers } from '../../service/user.api';


const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        getAllUsers: (store, {payload}) => payload,
    }
});

const { getAllUsers } = userSlice.actions;

export const getAsyncUser = () => dispatch => getUsers()
    .then(data => data.json())
    .then(users => dispatch(getAllUsers(users)));

export default userSlice.reducer;

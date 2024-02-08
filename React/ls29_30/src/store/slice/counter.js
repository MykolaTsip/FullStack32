import { createSlice } from '@reduxjs/toolkit';


const count = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        plus: (store) => store+1,
        minus: (store) => store-1,
        setZero: (store, {payload}) => payload,
        cT: () => {console.log(222); return 0},
        clearT: (store, {payload}) => { payload(); return store}
    }
})

const { setZero, T } = count.actions;


// export const asyncSetZero = () => {

//     return dispatch => {
//         setTimeout(() =>  dispatch(setZero), 2000)
//     }
// }

export const asyncSetZero = () => dispatch =>  setTimeout(() =>  dispatch(setZero(0)), 2000);

// export const asynInt = () => dispatch =>  {let ddd =  setInterval(() =>  dispatch(clearT(ddd)), 2000);}



export default count.reducer

export const { minus, plus } = count.actions
import {createSlice} from '@reduxjs/toolkit';

export const amountSlice = createSlice({
    name: 'amount',
    initialState: {
        value: 0
    },
    reducers:{
        deposite: (state, action) => {
            state.value=action.payload;
        },
        withdraw: (state, action) => {
            state.value=action.payload;
        }
    }
})

export default amountSlice.reducer;

export const {deposite, withdraw} = amountSlice.actions;

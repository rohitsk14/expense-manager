import {configureStore} from '@reduxjs/toolkit';
import amountReducer from './slice';

export default configureStore({
    reducer: {
        amount: amountReducer,
    },
})
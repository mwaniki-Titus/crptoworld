import {configureStore} from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query/react';


//import the APIs
import { userApi } from '../features/user/userApi';
import { transactionApi } from '../features/transactions/transactionApi';
import { paymentApi } from '../features/payments/paymentApi';
import { grantsApi } from '../features/grants/grantsApi';

export const store=configureStore({
    reducer:{
        [userApi.reducerPath]:userApi.reducer,
        [transactionApi.reducerPath]:transactionApi.reducer,
        [paymentApi.reducerPath]:paymentApi.reducer,
        [grantsApi.reducerPath]:grantsApi.reducer,
    
    },

    middleware:(getDefaultMiddleware)=>getDefaultMiddleware()
    .concat(
        userApi.middleware,
        transactionApi.middleware,
        grantsApi.middleware,
        paymentApi.middleware,
        
        )
    }, 
)

setupListeners(store.dispatch)
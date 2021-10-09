import { configureStore } from '@reduxjs/toolkit'
import reducer from './redux'
export const store = configureStore({
    reducer: {
        link: reducer
    },
})
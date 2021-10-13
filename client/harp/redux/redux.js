import { createSlice } from "@reduxjs/toolkit";

const initial = {
    value: "noblog"
}

export const redux = createSlice({
    name: "redux",
    initialState: initial,
    reducers: {
        linker: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { linker } = redux.actions

export default redux.reducer
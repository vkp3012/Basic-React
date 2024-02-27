import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    name : "toggle",
    initialState : {
        value : "light"
    },
    reducers : {
        setTheme : (state,action) => {
            state.value = action.payload;
        }
    }
})

export const { setTheme } = toggleSlice.actions;

export default toggleSlice.reducer
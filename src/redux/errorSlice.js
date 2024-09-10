import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
    name: 'error',
    initialState: null,
    reducers: {
        setError: (state, action) => {
            state = action.payload;
        }
    }
})

export const { setError } = errorSlice.actions;
export default errorSlice.reducer;
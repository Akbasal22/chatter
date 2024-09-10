import { createSlice } from '@reduxjs/toolkit'


export function serializeUser(user) {
    return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        isLoggedIn: true,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: sessionStorage.getItem('user') || JSON.stringify({ isLoggedIn: false }),
    reducers: {
        login: (state, action) => {
            sessionStorage.setItem('user', action.payload);
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = { isLoggedIn: false };
            sessionStorage.clear();
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
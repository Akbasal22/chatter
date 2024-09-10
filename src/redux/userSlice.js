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
    initialState: JSON.parse(sessionStorage.getItem('user')) || { isLoggedIn: false },
    reducers: {
        login: (state, action) => {
            const user = JSON.parse(action.payload);
            sessionStorage.setItem('user', action.payload);
            return user;
        },
        logout: (state) => {
            sessionStorage.clear();
            return { isLoggedIn: false };
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
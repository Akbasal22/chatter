import { createSlice } from '@reduxjs/toolkit'


function serializeUser(user) {
    return {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        isLoggedin: true,
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState: { isLoggedIn: false },
    reducers: {
        login: (state, action) => {
            const serializedUser = JSON.stringify(serializeUser(action.payload));
            sessionStorage.setItem('user', serializedUser);
            state.user = serializedUser;
        },
        logout: (state) => {
            state.user = { isLoggedIn: false },
                sessionStorage.clear();
        }
    }
})

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
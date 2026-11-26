import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedIn: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        login: (state, action) => {
            console.log('Login action payload:', action.payload);
            console.log('Current state before login:', state);
            state.isLoggedIn = true;
            state.user = action.payload;

        },
        logout: (state) => {
            console.log('Current state before logout:', state);
            console.log('Logging out user:', state.user);
            state.isLoggedIn = false;
            state.user = null;
        }
    }
});


export const { login } = authSlice.actions;
export default authSlice.reducer;
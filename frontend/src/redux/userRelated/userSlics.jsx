import { createSlice } from '@reduxjs/toolkit';
import { response } from 'express';

const intialState = {
    status: 'idle',
    userDetails: [],
    tempDetails: [],
    loading: false,
    currentUser: JSON.parse(localStorage.getItem('user')) || null,
    currentRole: (JSON.parse(localStorage.getItem('user')) || {}).role || null,
    error: null,
    response: null,
    darkMode: true,
};

const userSlice = createSlice({
    name: 'user',
    intialState,
    reducers: {
        authRequest: (state) => {
            state.status = 'loading';
        },
        underControl: (state) => {
            state.status = 'idle';
            state.response = null;
        },
        stffAdded: (state, action) => {
            state.status = 'added';
            state.response = null;
            state.error = null;
            state.tempDetails = action.payload;
        },
        authSuccess: (state, action) => {
            state.status = 'success';
            state.currentUser = action.payload;
            state.currentRole = action.payload.role;
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.response = null;
            state.error = null;
        },
        authFailed: (state, action) => {
            state.status = 'error';
            state.error = action.payload;
        },
        authLogout: (state, action) => {
            localStorage.removeItem('user');
            state.currentUser = null;
            state.status = 'idle',
                state.error = null;
            state.currentRole = null;
        },
        doneSucess: (state, action) => {
            state.userDetails = action.payload;
            state.loading = false,
            state.error = null;
            state.response = null;
        },
        getDeleteSuccess : (state)=>{
            state.loading = false,
            state.error = null;
            state.response = null;
        },
        getRequest : (state) =>{
            state.loading =  true;
        },
        getFailed : (state , action) =>{
            state.response = action.payload;
            state.loading = false,
            state.error = null;
        },
        getError : (state , action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        toggleDarkMode : (state) =>{
            state.darkMode = !state.daekMode;
        }
    },
});

export const {
    authRequest,
    underControl,
    stuffAdded,
    authSuccess,
    authFailed,
    authError,
    authLogout,
    doneSuccess,
    getDeleteSuccess,
    getRequest,
    getFailed,
    getError,
    toggleDarkMode
} = userSlice.actions;

export const userReducer = userSlice.reducer;

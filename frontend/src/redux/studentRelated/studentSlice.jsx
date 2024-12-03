import {createSlice} from '@reduxjs/toolkit'
import { getFailed, getRequest } from '../userRelated/userSlice'
import { act } from 'react';

const initialState={
    studentsList : [],
    loading : false,
    error : null,
    response : null,
    stateStatus : "idle"
}

const studentSlice = createSlice({
    name : 'student',
    initialState,
    reducers:{
        getRequest : (state) => {
            state.loading =  true;
        },
        stuffDone : (state) => {
            state.loading = false;
            state.error = false;
            state.response = null;
            state.stateStatus = "added";
        },
        getSuccess : (state,action) =>{
            state.studentsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed : (state,action) =>{
            state.response = action.payload;
            state.loading = false;
            state.error = nulll;
        },
        getError : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        },
        underStudentControl : (state) => {
            state.loading = false;
            state.response = null;
            state.error = null;
            state.stateStatus = "idle";
        }
    }
});

export const {
    getRequest,
    getSuccess,
    getFailed,
    underStudentControl,
    stuffDone
} = studentSlice.actions;

export const studentReducer = studentSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { response } from "express";

const initialState = {
    sclassesList : [],
    sclassStudents : [],
    sclassDetails : [],
    subjectsList : [],
    subjectsDetails : [],
    loading : false,
    subloading : false,
    error : false,
    response : false,
    getresponse : false,
};

const sclassSlice = createSlice({
    name : 'sclass',
    initialState,
    reducer : {
        getRequest : (state) =>{
            state.loading = true;
        },
        getSubDetailsRequest : (state)=>{
            state.subloading = true;
        },
        getSuccess : (state,action)=>{
            state.sclassList = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getStudentsSuccess : (state,action)=>{
            state.sclassStudents = action.payload;
            state.loading = false;
            state.error = null;
            state.getresponse = null;
        },
        getSubjectsSuccess: (state, action) => {
            state.subjectsList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed: (state, action) => {
            state.subjectsList = [];
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getFailedTwo : (state,action)=>{
            state.sclassesList = [];
            state.sclassStudents = [];
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError : (state , action) =>{
            state.loading = false;
            state.error = action.payload;
        },
        detailsSucess : (state,action)=>{
            state.sclassDetails = action.payload;
            state.loading = false;
            state.error = null;
        },
        getSubDetailsSuccess : (state,action) =>{
            state.subjectsDetails = action.payload;
            state.subloading = false;
            state.error = null;
        },
    },
}); 

export const {
    getRequest,
    getFailed,
    getFailedTwo,
    getSuccess,
    getError,
    getStudentsSuccess,
    getSubDetailsRequest,
    getSubjectsSuccess,
    detailsSucess,
    getSubDetailsSuccess
} = sclassSlice.actions;

export const sclassReducer = sclassSlice.reducer;
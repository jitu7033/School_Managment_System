import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    noticeList : [],
    loading : false,
    error : null,
    response : null
}

const noticeSlice = createSlice({
    name : 'notice',
    initialState,
    reducers: {
        getRequest: (state) => {
            state.loading = true;
        },
        getSuccess : (state,action) => {
            state.noticeList = action.payload;
            state.loading = false;
            state.error = null;
            state.response = null;
        },
        getFailed : (state,action) => {
            state.response = action.payload;
            state.loading = false;
            state.error = null;
        },
        getError : (state,action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
})
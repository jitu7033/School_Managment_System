import axios from 'axios';

import {
    getRequest, getSuccess, getFailed, getError, getStudentsSuccess, getFailedTwo, detailsSucess, getSubjectsSuccess, getSubDetailsSuccess,
    getSubDetailsRequest
} from './sclassSlice';

export const getAllSclasses = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/List${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        }
        else {
            dispatch(getSuccess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};

export const getClassStudents = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/Sclass/Students/${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        }
        else {
            dispatch(getStudentsSuccess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};

export const getClassDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data) {
            dispatch(detailsSucess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};

export const getSubjectList = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(getSubjectsSuccess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};

export const getTeacherFreeSclassSubjects = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/FreeSubjectList/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(getSubjectsSuccess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};

export const getSubjectsDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${process.env.REACT_APP_BASE_URL}/${address}/${id}`);
        if (result.data) {
            dispatch(getSubDetailsSuccess(result.data));
        }
    }
    catch (error) {
        dispatch(getError(error));
    }
};
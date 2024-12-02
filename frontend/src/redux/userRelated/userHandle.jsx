import axios from 'axios';
import {
    authRequest,
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
} from './userSlics';

export const loginUser =(fields , role) => async (dispatch)=>{
    dispatch(authRequest());

    try{
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Login`,fields ,{
            headers : { 'Content-Type' : 'application/json'},
        });
        if(result.data.role){
            dispatch(authSuccess(result.data));
        }
        else{
            dispatch(authFailed(result.data.message));
        }
    }
    catch(error){
        dispatch(authError(error));
    }
};

export const registerUser = (fields , role) => async (dispatch) => {
    dispatch(authRequest());

    try{
        const result = await axios.post(`${process.env.REACT_APP_BASE_URL}/${role}Reg` , fields {
            headeres : {'Content-Type' : 'application/json'};
        });

        if(result.data.schoolName){
            dispatch(authSuccess(result.data));
        }else if(result.data.school){
            dispatch(stuffAdded());
        }
        else{
            dispatch(authFailed(result.data.message));
        }
    }
    catch(error){
        dispatch(authError(error));
    }
};

export const logoutUser = () =>(dispatch) =>{
    dispatch(authLogout());
};
import React,{ useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Grid,
    Paper,
    Box,
    Container,
    CircularProgress,
    Backdrop,
} from '@mui/material';

import { AccountCircle, School, Group} from '@mui/icons-material';
import styles from 'styled-components';
import { useDispatch , useSelector } from 'react-redux';
import { loginUser } from '../redux/userRelated/userHandle';
import Popup from '../components/Popup';

const ChooseUder = ({ visitor }) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const password = "password123";
    
    const { status , currentUser , currentRole } = useSelector(state => state.user);

    const [loader , setloader] = useState(false);
    const [showPopup , setShowPopup] = useState(false);
    const [message, setMessage] = useState("");

    const navigateHandler = (user) => {
        if(user === "Admin"){
            if(visitor === "guest"){
                const email = "guest@12";
                const feilds = { email, password};
                setloader(true);
                dispatch(loginUser(fields , user));
            }
            else{
                navigate('/Adminlogin');
            }
        }
        else if(user === "Student"){
            if(visitor ==="guest"){
                const rollnum = "1";
                const studentName = "Guest";
                const fields = { rollnum , studentName , password };
                setloader(true);
                dispatch(loginUser(fields, user));
            }
            else {
                navigate('/Studentlogin');
            }
        }
        else if(user === "Teaccher"){
            if(visitor === "guest"){
                const email = "guest@12";
                const fields = { email , password};
                setloader(true);
                dispatch(loginUser(fields , user));
            }
            else{
                navigate("/Teaccherlogin");
            }
        }
    }
    
}
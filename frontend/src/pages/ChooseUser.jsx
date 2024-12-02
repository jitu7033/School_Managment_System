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

    useEffect(()=>{
        if(status === 'success' || currentUser!== null){
            if(currentRole === 'Admin'){
                navigate('/Admin/dashboard');
            }
            else if(currentRole === 'Student'){
                navigate('/Student/dashboard');
            }
            else if(currentRole === 'Teaccher'){
                navigate('/Teacher/dashboard');
            }
        }
        else if(status === 'error'){
            setloader(false);
            setMessage("Network Error");
            setShowPopup(true);
        }
    } , [ status , currentRole , navigate , currentUser]);

    return (
        <StyledContainer>
            <Container>
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onClick={()=> navigateHandler("Admin")}>
                            <StyledPaper elevation={3}>
                                <Box mb={2}>
                                    <AccountCircle fontsize="large" />
                                </Box>
                                <StyledTypography>
                                    Admin
                                </StyledTypography>
                                Login As an Administerator to access the dashboard to manage app data
                            </StyledPaper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </StyledContainer>
    )
}
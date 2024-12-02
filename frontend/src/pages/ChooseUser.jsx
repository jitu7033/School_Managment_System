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

const ChooseUser = ({ visitor }) =>{
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
                    <Grid item xs={12} sm={6} md={4}>
                        <div onClick={()=> navigateHandler("Teacher")}>
                            <StyledPaper elevation={3}>
                                <Box mb={2}>
                                    <AccountCircle fontsize="large" />
                                </Box>
                                <StyledTypography>
                                    Teacher
                                </StyledTypography>
                                Login as a teacher to create courses, assignments, and track student progress.
                            </StyledPaper>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <div onClick={() => navigateHandler("Student")}>
                            <StyledPaper elevation={3}>
                                <Box mb={2}>
                                    <AccountCircle fontsize="large" />
                                </Box>
                                <StyledTypography>
                                    Student
                                </StyledTypography>
                                Login as a student to explore course materials and assignments.
                            </StyledPaper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Backdrop sx={{ color: '#fff' ,zIndex: (theme) => theme.zIndex.drawer + 1}} open={loader}>
                <CircularProgress color='inherit' />
                Please Wait
            </Backdrop>
            <Popup message={message} setMessage={setShowPopup} showPopup={showPopup}/>
        </StyledContainer>
    );
};

export default ChooseUser;

const StyledContainer = styled.div`
    background : liner-gradient(to bottom , #411d70 , #19118b);
    height : 120vh;
    display : flex;
    justify-content : center;
    padding : 2rem;
`;


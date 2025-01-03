import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AppBar, Drawer } from '../../components/Styles';
import Logout from '../Logout';
import SideBar from './SideBar';
import AdminProfile from './AdminProfile';
import AdminHomePage from './AdminHomePage';


import AddStudent from './studentReleated/AddStudent';
import SeeComplains from './studentReleated/SeeComplains';
import ShowStudents from './studentReleated/ShowStudents';
import StudentAttendance from './studentReleated/StudentAttendence';
import StudentExamMarks from './studentReleated/StudentExamMarks';
import ViewStudent from './studentReleated/ViewStudent';

import AddNotice from './noticeReleated/AddNotice';
import ShowNotices from './noticeReleated/ShowNotices';

import ShowSubjects from './subjectReleated/ShowSubject';
import SubjectForm from './subjectReleated/SubjectForm';
import ViewSubject from './subjectReleated/ViewSubject';

import AddTeacher from './teacherReleated/AddTeacher';
import ChooseClass from './teacherReleated/ChooseClass';
import ChooseSubject from './teacherReleated/chooseSubject';
import ShowTeachers from './teacherReleated/ShowTeacher';
import TeacherDetails from './teacherReleated/TeacherDetails';

import AddClass from './classReleated/AddClass';
import ClassDetails from './classReleated/ClassDetails';
import ShowClasses from './classReleated/ShowClasses';
import AccountMenu from '../../components/AccountMenu';


const styles = {
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
}


const AdminDashboard = ()=>{
    const [open , setOpen] = useState(false);
    const toggleDrawer = () =>{
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{display:'flex'}}>
                <CssBaseline/>
                <AppBar open={open} position='absolute'>
                    <Toolbar sx={{ pr:'24px'}} >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open-drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight :'36px',
                                ...(open && {display:'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography 
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow : 1}}
                        >
                            Admin Dashboard
                        </Typography>
                        <AccountMenu/>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        <SideBar/>
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<AdminHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Admin/dashboard" element={<AdminHomePage />} />
                        <Route path="/Admin/profile" element={<AdminProfile />} />
                        <Route path="/Admin/complains" element={<SeeComplains />} />

                        <Route path="/Admin/addnotice" element={<AddNotice />} />
                        <Route path="/Admin/notices" element={<ShowNotices />} />

                        <Route path="/Admin/subjects" element={<ShowSubjects />} />
                        <Route path="/Admin/subjects/subject/:classID/:subjectID" element={<ViewSubject />} />
                        <Route path="/Admin/subjects/chooseclass" element={<ChooseClass situation="Subject" />} />

                        <Route path="/Admin/addsubject/:id" element={<SubjectForm />} />
                        <Route path="/Admin/class/subject/:classID/:subjectID" element={<ViewSubject />} />

                        <Route path="/Admin/subject/student/attendance/:studentID/:subjectID" element={<StudentAttendance situation="Subject" />} />
                        <Route path="/Admin/subject/student/marks/:studentID/:subjectID" element={<StudentExamMarks situation="Subject" />} />

                        <Route path="/Admin/addstudents" element={<AddStudent situation="Student" />} />
                        <Route path="/Admin/students" element={<ShowStudents />} />
                        <Route path="/Admin/students/student/:id" element={<ViewStudent />} />
                        <Route path="/Admin/students/student/attendance/:id" element={<StudentAttendance situation="Student" />} />
                        <Route path="/Admin/students/student/marks/:id" element={<StudentExamMarks situation="Student" />} />

                        <Route path="/Admin/teachers" element={<ShowTeachers />} />
                        <Route path="/Admin/teachers/teacher/:id" element={<TeacherDetails />} />
                        <Route path="/Admin/teachers/chooseclass" element={<ChooseClass situation="Teacher" />} />
                        <Route path="/Admin/teachers/choosesubject/:id" element={<ChooseSubject situation="Norm" />} />
                        <Route path="/Admin/teachers/choosesubject/:classID/:teacherID" element={<ChooseSubject situation="Teacher" />} />
                        <Route path="/Admin/teachers/addteacher/:id" element={<AddTeacher />} />

                        <Route path="/logout" element={<Logout/>} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}
export default AdminDashboard;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../../redux/userRelated/userHandle';
import { useNavigate, useParams } from 'react-router-dom'
import { Box, Button, Collapse, Table, TableBody, TableHead, Typography } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { calculateOverallAttendancePercentage, calculateSubjectAttendancePercentage, groupAttendanceBySubject } from '../../components/attendanceCalculator';
import CustomPieChart from '../../components/CustomPieChart'
import { PurpleButton } from '../../components/buttonStyles';
import { StyledTableCell, StyledTableRow } from '../../components/styles';

const TeacherViewSubject =() =>{
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { currentUser , userDetails , response , loading , error } = useSelector(state => state.user);

    const address = "Student";
    const studentID = params.id;
    const teachSubject = currentUser.teachSubject?.subName
    const teachSubjectID = currentUser.teachSubject?._id;

    useEffect(() => {
        dispatch(getUserDetails(studentID , address));
    } , [dispatch , studentID]);

    if(response)    console.log(response);
    else if(error)  console.log(error);

    const [sclassName, setSclassName] = useState('');
    const [studentSchool, setStudentSchool] = useState('');
    const [subjectMarks, setSubjectMarks] = useState('');
    const [subjectAttendance, setSubjectAttendance] = useState('');

    const [openStates , setOpenState] = useState({});

    const handleopen = (subid) =>{
        setOpenState((prevState) =>({
            ...prevState,
            [subid] : !prevState[subid],
        }));
    };

    useEffect(()=>{
        if(userDetails) {
            setSclassName(userDetails.sclassName || '');
            setStudentSchool(userDetails.school || '');
            setSubjectMarks(userDetails.examResult || '');
            setSubjectAttendance(userDetails.attendance || []);
        }
    } , [userDetails]);

    const overallAttendancePercentage = calculateOverAllAttendancePercantage(subjectAttendance);

    const overallAbsentPercentage = 100 - overallAttendancePercentage;

    const charData =[
        { name: 'Present', value: overallAttendancePercentage },
        { name: 'Absent', value : overallAbsentPercentage },
    ];

    return (
        <>
            {loading
                ?
                <>
                    <div>Loading...</div>
                </>
                :
                <div>
                    Name : {userDetails.name} <br />
                    Roll Number : {userDetails.rollnum} <br />
                    Class : {userDetails.sclassName} <br />
                    School : {userDetails.schoolName} <br /><br/>
                    <h3>Attendance</h3>
                    {subjectAttendance && Array.isArray(subjectAttendance) && subjectAttendance.length >0
                        && <>
                                {Object.entries(groupAttendanceBySubject(subjectAttendance)).map(([subName ,{ present , allData , subId , sessions }], index) =>{
                                    if(subName === teachSubject) {
                                        const subjectAttendancePercentage = calculateOverallAttendancePercentage(present,sessions);
                                        return (
                                            <Table key={index}>
                                                <TableHead>
                                                    <StyledTableRow>
                                                        <StyledTableCell>Subject</StyledTableCell>
                                                        <StyledTableCell>Present</StyledTableCell>
                                                        <StyledTableCell>Total Sessions</StyledTableCell>
                                                        <StyledTableCell>Attendance Percentage</StyledTableCell>
                                                        <StyledTableCell align="center">Actions</StyledTableCell>
                                                    </StyledTableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <StyledTableRow>
                                                        <StyledTableCell>{subName}</StyledTableCell>
                                                        <StyledTableCell>{present}</StyledTableCell>
                                                        <StyledTableCell>{sessions}</StyledTableCell>
                                                        <StyledTableCell>{subjectAttendancePercentage}%</StyledTableCell>
                                                        <StyledTableCell align="center">
                                                            <Button variant="contained" onClick={() => handleOpen(subId)}>
                                                                {openStates[subId] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}Details
                                                            </Button>
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                    <StyledTableRow>
                                                        <StyledTableCell style={{ paddingBottom :0 , paddingTop : 0}} colSpan={6}>
                                                            
                                                        </StyledTableCell>
                                                    </StyledTableRow>
                                                </TableBody>
                                            </Table>
                                        )
                                    }
                                })}
                           </>}
                </div>}
        </>
    )

}
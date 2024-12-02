import { useEffect } from "react";
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { getClassStudents } from "../../redux/sclassRelated/sclassHandle";
import { Paper, Box, Typography, ButtonGroup, Button, Popper, Grow, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
import { BlackButton, BlueButton } from "../../components/buttonStyles";
import TableTemplate from "../../components/TableTemplate";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const TeacherClassDetails = () =>{
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const { sclassStudents , loadin , error , getresponse } = useSelector((state) => state.sclass);

    const { currentUser } = useSelector(state => state.user);
    const classID = currentUser.teachSclass?._id;
    const subjectID = currentUser.teachSubject?._id;

    useEffect(()=>{
        dispatch(getClassStudents(classID));
    } , [dispatch , classID]);

    if(error){
        console.log(error);
    }

    const studentColumns = [
        { id: 'name', label: 'Name', minWidth: 170 },
        { id: 'rollNum', label: 'Roll Number', minWidth: 100 },
    ]

    const studentRows = sclassStudents.map((student) => {
        return {
            name : student.name,
            rollNum : student.rollNum,
            id : student._id,
        };
    })

    const StudentsButtonHaver = ({ row }) =>{
        const options = ['Take Attendance' , 'Provide Marks'];

        const [open , setOpen] = React.useState(false);
        const anchorRef = React.useRef(null);
        const [selectedIndex , setselectedIndex] = React.useState(0);\

        const handleClick = () =>{
            console.info(`You Clicked ${options[selectedIndex]}`);
            if(selectedIndex === 0){
                handleAttendance();
            }
            else if(selectedIndex === 1){
                handleMarks();
            }
        };

        const handleAttendance = () =>{
            navigate(`/Teacher/class/student/attendance/${row.id}/${subjectID}`);
        };

        const handleMarks = () => {
            navigate(`/Teacher/class/student/marks/${row.id}/${subjectID}`)
        };

        const handleMenuItemClick = (event, index) => {
            setSelectedIndex(index);
            setOpen(false);
        };

        const handleToggle = () => {
            setOpen((prevOpen) => !prevOpen);
        };
    }
}
import { Container , Grid , Paper} from '@mui/material';
import SeeNotice from '../../components/SeeNotice';
import CountUp from 'react-countup';
import styled from 'styled-components';
import Students from "../../assets/img1.png";
import Lessons from "../../assets/subjects.svg";
import Test from "../../assets/assignment.svg";
import Time from "../../assets/time.svg";
import { getClassStudent , getSubjectDetails} from "../../redux/sclassRelated/sclassHandle";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const TeacherHomePage = ()=> {
    const dispatch =  useDispatch();
    const { currentUser } = useSelector((state) => state.user);
    const { subjectDetail, sclassStudents } = useSelector((state) => state.sclass);\

    const classID = currentUser.teachSclass?._id;
    const subjectID = currentUser.teachSubject?._id;

    useEffect(()=>{
        dispatch(getSubjectDetails(subjectID, "Subject"));
        dispatch(getClassDetails(classID));
    } , [dispatch , subjectID , classID]);

    const numberOfStudents = sclassStudents && sclassStudents.length;
    const numberOfSessions = subjectDetail && subjectDetail.sessions;

    
}
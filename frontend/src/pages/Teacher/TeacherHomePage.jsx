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

    return (
        <>
            <Container maxWidth="lg" sx={{ mt:4 , mb: 4 }}>
                <Grid item xs={12} md={3} lg={3}>
                    <StylePaper>
                        <img src={Students} alt="Students" />
                        <Title>
                            Class Students
                        </Title>
                        <Data start={0} end={numberOfStudents} duration={2.5} />
                    </StylePaper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <StylePaper>
                        <img src={Lessons} alt="Lessons" />
                        <Title>
                            Total Lessons
                        </Title>
                        <Data start={0} end={numberOfSessions} duration={5} />
                    </StylePaper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <StylePaper>
                        <img src={Tests} alt="Tests" />
                        <Title>
                            Tests Taken
                        </Title>
                        <Data start={0} end={24} duration={4} />
                    </StylePaper>
                </Grid>
                <Grid item xs={12} md={3} lg={3}>
                    <StylePaper>
                        <img src={Time} alt="Time" />
                        <Title>
                            Total Hours
                        </Title>
                        <Data start={0} end={30} duration={4} suffix="hrs"/>
                    </StylePaper>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p:2 , display:'flex' , flexDirection : 'column'}}>
                        <SeeNotice />
                    </Paper>
                </Grid>
            </Container>
        </>
    );
};


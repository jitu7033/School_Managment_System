import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button, Grid, Box, Typography, Paper, Checkbox, FormControlLabel, TextField, CssBaseline, IconButton, InputAdornment, CircularProgress, Backdrop } from '@mui/material';
import { LightPurpleButton } from '../components/buttonStyles';
import styled from 'styled-components';
import bgpic from "../assets/designlogin.jpg"
import { Link, useNavigate } from 'react-router-dom';
import Popup from '../components/Popup';




const defaultTheme = createTheme();

const LoginPage = ({ role }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Typography variant='h4' sx={{ mb: 2, color: "#2c2143", }}>
              {role} Login
            </Typography>
            <Typography variant='h7'>
              Welcome Back Please Enter your Details
            </Typography>
            <Box component="form" noValidate sx={{ mt: 2 }}>
              {role === "Student" ? (
                <>
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='rollNumber'
                    label='Enter Your Roll Number'
                    name='rollNumber'
                    autoComplete='off'
                    type='number'
                    autoFocus
                  // error={rollNumberError} // i will change this file when use logic for login
                  // helperText={rollNumber && "roll Number is Required "}
                  // onChange={handleInputChange}
                  />
                  <TextField
                    margin='normal'
                    required
                    fullWidth
                    id='StudentName'
                    label='Enter Your Name '
                    autoComplete='name'
                    autoFocus
                  // error={StudentNameError}
                  // helperText={studentNameError && 'Name is required'}
                  // onChange={handleInputChange}
                  />
                </>
              ) :
                (
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Enter your email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  // error={emailError}
                  // helperText={emailError && 'Email is required'}
                  // onChange={handleInputChange}
                  />
                )}
              <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label='password'
                // type={toggle ? 'text' : 'password'} // update after complete html page 
                id='password'
                autoComplete='current-password'
              // error={passwordError}
              // helperText={passwordError && 'Password is required'}
              // onChange={handleInputChange}
              // InputProps={{
              //   endAdornment:(
              //     <InputAdornment position="end">
              //       <IconButton onClick={() => setToggle(!toggle)}>
              //         {toggle ? (
              //           <visibility/>
              //         ):(<visibilityOff/>)}
              //       </IconButton>
              //     </InputAdornment>
              //   )
              // }}
              />
              <Grid container sx={{ display: "flex", justifyContent: "space-between" }}>
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <StyledLink href="#">
                  Forgot password?
                </StyledLink>
              </Grid>
              <LightPurpleButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3 }}
              >
                {/* {loader ?
              <CircularProgress size={24} color="inherit" />
              : "Login"} */}
              "Login" 
              </LightPurpleButton>
              <Button
                fullWidth
                // onClick={guestModeHandler}
                variant="outlined"
                sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}>
                Login as Guest
              </Button>
              {role === "Admin" &&
                <Grid container>
                  <Grid>
                    Don't have an account?
                  </Grid>
                  <Grid item sx={{ ml: 2 }}>
                    <StyledLink to="/Adminregister">
                      Sign up
                    </StyledLink>
                  </Grid>
                </Grid>
              }
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${bgpic})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        // open={guestLoader} // update after adding js 
      >
        <CircularProgress color="primary" />
        Please Wait
      </Backdrop>
      {/* <Popup message={message} setShowPopup={setShowPopup} showPopup={showPopup} /> */}
    </ThemeProvider>
  )
}

export default LoginPage


const StyledLink = styled(Link)`
  margin-top: 9px;
  text-decoration: none;
  color: #7f56da;
`;

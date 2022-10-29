import React from 'react'
import './loginPage.css'
import AuthContext from '../../context/AuthContext';
import { useContext } from 'react';
import { Paper,Box } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/joy/TextField';

function LoginPage() {
  let {login} = useContext(AuthContext)

  return (
    <div className='login-page'>
      <Paper elevation = {12} sx={{borderRadius: "1rem"}}>
        <div className="login-container">
          <h2 className = 'top'>PES College of Engineering</h2>
          <h4 className = 'top'>Department management portal</h4>
          
          <form onSubmit={(e) => login(e)}>
            <TextField
              className = 'text email'
              name = 'email'
              type = 'email'
              label='email'
              placeholder = 'eg: useremail@gmail.com'
              required
            />
            <TextField
                className = 'text'
                name = 'password'
                type = 'password'
                label='password'
                placeholder = 'enter your password here'
                required
            />
            <h6 className='forgot-password'>Forgot your password?</h6>
            <Box textAlign='center'>
              <LoadingButton
              type = 'submit'
              variant='contained'
              className = 'sign-in'
              >Sign In</LoadingButton>
            </Box>
          </form>
        </div>
        </Paper>
    </div>
  )
}

export default LoginPage
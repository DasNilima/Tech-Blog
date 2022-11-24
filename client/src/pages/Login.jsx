import React, { useState } from 'react';
import { TextField, Box, Button, Typography, styled } from '@mui/material';

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;
const Image = styled('img')({
    width: 100,
    display: 'flex',
    margin: 'auto',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;
const LoginButton = styled(Button)`
    text-tranform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px rgb(0 0 0 / 20%)
`
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;


const Login = () => {
    
    // const [signup, setSignup] = useState(signupInitialValues); 
    const [account, toggleAccount] = useState('login'); // passing login state by default
    
    // const onInputChange = (e) => {
    //     setSignup({ ...signup, [e.target.name]: e.target.value });
    // }
    
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');  // check the value
    }
return (
        <Component>
            <Box>
            <Image src="/logo-img.png" alt="blog" />
            {
                account === 'login' ?  // set condition using ternary operator 
                <Wrapper> 
                    <TextField variant="filled" label='Enter Username'/>
                    <TextField variant="filled" label='Enter password'/>
                    <LoginButton variant="contained">Login</LoginButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>      
                    <SignupButton onClick={()=> toggleSignup()}>Create an account</SignupButton>
                </Wrapper>
                :
                <Wrapper> 
                    <TextField variant="filled" label='Enter Name'/>
                    <TextField variant="filled" label='Enter Username'/>
                    <TextField variant="filled" label='Enter Password'/>
                    <SignupButton>Signup</SignupButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>      
                    <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                </Wrapper> 
            }
            </Box>
        </Component>
    )
}

export default Login;
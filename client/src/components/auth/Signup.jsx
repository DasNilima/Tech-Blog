import { Box, Button, TextField, Typography, styled } from "@mui/material";
import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { API } from '../../service/api';


const Div = styled(Box)`
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
    background: #fff;
    color: #2874f0;
    height: 48px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const SignupButton = styled(Button)`
    text-tranform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    margin-bottom: 20px;
    border-radius: 5px;
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`

const Signup = () => {
    const history = useNavigate();
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setCredentials((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const sendRequest = async () => {
        const res = await API.userSignup ({
            username: credentials.username,
            email: credentials.email,
            password: credentials.password,
        })
        .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // send http request
        sendRequest()
            .then(() => history("/"));
    };
        return (
            <Div>
                <form onSubmit={handleSubmit}>
                    <Box style={{ marginTop: 30, textAlign: 'center' }}>
                        <Image src="/logo-img.png" alt="blog" />
                        <Typography variant="h4" >SignUp</Typography>
                        <Wrapper>
                        <TextField
                                name="username"
                                onChange={handleChange}
                                value={credentials.username}
                                variant="filled"
                                placeholder="username"
                                margin="normal"
                            />
                            <TextField
                                name="email"
                                onChange={handleChange}
                                type={"email"}
                                value={credentials.email}
                                variant="filled"
                                placeholder="Email"
                                margin="normal"
                            />
                            <TextField
                                name="password"
                                onChange={handleChange}
                                type="password"
                                value={credentials.password}
                                variant="filled"
                                placeholder="Password"
                                margin="normal"
                                />
                            <SignupButton variant="contained" type="submit">Sign Up</SignupButton>
                            <Text style={{ textAlign: 'center',margin: '5px'  }}>OR</Text>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/`}>
                                <LoginButton variant="contained">Already have an account</LoginButton>
                            </Link>
                            </Wrapper>
                        </Box>
                </form>
            </Div>
        )
    }


export default Signup
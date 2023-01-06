import { Box, Button, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


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
    background: #FB641B;
    color: #fff;
    height: 48px;
    margin-bottom: 20px;
    border-radius: 5px;
`;

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
        const res = await axios.post('/user/signup', {
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
            .then(() => history("/login"));
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
                        </Wrapper>
                        <LoginButton variant="contained" type="submit">
                            Sign Up
                        </LoginButton>
                        </Box>
                </form>
            </Div>
        )
    }


export default Signup
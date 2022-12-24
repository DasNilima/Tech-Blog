import { Box, Button, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { authActions } from "../../store";


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

const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const [credentials, setCredentials] = useState({
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
        const res = await axios.post("/user/login", {
            email: credentials.email,
            password: credentials.password,
        })
        .catch((err) => console.log(err));
        const data = await res.data;
        return data;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(credentials);
        // send http request
        sendRequest()
            .then((data) => localStorage.setItem("userId", data.user._id))
            .then(() => dispatch(authActions.login()))
            .then(() => history("/home"));
    };
        return (
            <Div>
                <form onSubmit={handleSubmit}>
                    <Box style={{ marginTop: 30, textAlign: 'center' }}>
                        <Image src="/logo-img.png" alt="blog" />
                        <Typography variant="h4" >Login</Typography>
                        <Wrapper>
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
                            Login
                        </LoginButton>
                        </Box>
                </form>
            </Div>
        )
    }


export default Login

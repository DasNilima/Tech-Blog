import { Box, Button, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
import React, { useState, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate,Link } from "react-router-dom";
import { authActions } from "../../store";
import { DataContext } from "../../context/DataProvider"


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
    margin-bottom: 10px;
    border-radius: 5px;
`;
const SignupButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 5px;
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`
const Login = () => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const { setAccount } = useContext(DataContext);

    const [credentials, setCredentials] = useState({
        username: "",
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
            username: credentials.username,
            password: credentials.password,
        })
        .catch((err) => console.log(err));
        const data = await res.data;
        setAccount({ email: data.email, username: data.username });
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
    <Component>
            <form onSubmit={handleSubmit}>
                <Box style={{ marginTop: 30, textAlign: 'center' }}>
                        <Image src="/logo-img.png" alt="blog" />
                    <Typography variant="h4" >Login</Typography>
                    <Wrapper>
                            <TextField
                                name="username"
                                onChange={handleChange}
                                type={"username"}
                                value={credentials.username}
                                variant="filled"
                                placeholder="Username"
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
                            <LoginButton variant="contained" type="submit">Login</LoginButton>
                                <Text style={{ textAlign: 'center', margin: '5px' }}>OR</Text>
                            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`/Signup`}>
                            <SignupButton variant="contained">CREATE AN ACCOUNT</SignupButton>
                            </Link>
                    </Wrapper>
                </Box>
            </form>
    </Component>
    )
}

export default Login

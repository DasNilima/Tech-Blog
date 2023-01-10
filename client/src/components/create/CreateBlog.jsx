import React, { useState, useEffect, useContext } from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import { DataContext } from '../../context/DataProvider';
import { API } from '../../service/api';
import axios from 'axios';


const Container = styled(Box)(({ theme }) => ({
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}));

const Image = styled('img')({
    width: '100%',
    height: '50vh',
    objectFit: 'cover'
});

const StyledFormControl = styled(FormControl)`
    margin-top: 10px;
    display: flex;
    flex-direction: row;
`;

const InputTextField = styled(InputBase)`
    flex: 1;
    margin: 0 30px;
    font-size: 25px;
`;

const Textarea = styled(TextareaAutosize)`
    width: 100%;
    border: none;
    margin-top: 50px;
    font-size: 18px;
    &:focus-visible {
        outline: none;
    }
`;

const initialBlog = {
    title: '',
    content: '',
    image: '',
    user: '',
    username: '',
    categories: '',
    createdDate: new Date()
}

const CreateBlog = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [blog, setBlog] = useState(initialBlog);
    const [file, setFile] = useState('');
    const { account } = useContext(DataContext);
    const url = blog.image ? blog.image : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

useEffect(() => {
const getImage = async () => {
    if (file) {
    const data = new FormData();
    data.append("name", file.name);
    data.append("file", file);

    //Api call
    const response = await axios.post('/file/upload', data );
    blog.image = response.data;
    }
}
    getImage();
    blog.categories = location.search?.split('=')[1] || 'All';
    blog.user = localStorage.getItem("userId");
    blog.username = account.username;
}, [file])
const saveBlog = async () => {
await API.createBlog(blog);
navigate('/home');
}

const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
}
return (
        <Container>
            <Image src={url} alt="blog" />
            <StyledFormControl>
                <label htmlFor="fileInput">
                    <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <InputTextField  onChange={(e) => handleChange(e)} name='title' placeholder="Title"  />
                <Button onClick={() => saveBlog()}  variant="contained" color="primary">Publish</Button>
            </StyledFormControl>
            <Textarea
                minRows={5}
                placeholder="write your blog..."
                name='content'
                onChange={(e) => handleChange(e)} 
            />
        </Container>
    )
}

export default CreateBlog;


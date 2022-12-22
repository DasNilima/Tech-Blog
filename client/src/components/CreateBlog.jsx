// import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
// import React, { useState } from 'react';
// import { useNavigate, useLocation } from "react-router-dom";

// const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold"};

// const CreateBlog = () => {
  
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [newBlog, setNewBlog] = useState({
//     title: '',
//     content: '',
//     imageURL: '',
//     categories: '',
//     createdDate: new Date()
//   });
//   const handleChange = (e) => {
//     setNewBlog((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
// }));
//   };
//   const sendRequest = async () => {
//     const res = await axios
//       .post("/blog/create", {
//         title: newBlog.title,
//         content: newBlog.content,
//         image: newBlog.imageURL,
//         user: localStorage.getItem("userId"),
//         categories: location.search?.split('=')[1] || 'All',
//       })
//       .catch((err) => console.log(err));
      
//     const data = await res.data;
//     return data;
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(newBlog);
//     sendRequest()
//       .then((data) => console.log(data))
//       .then(() => navigate("/myblogs"));
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <Box
//           border={3}
//           borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
//           borderRadius={10}
//           boxShadow="10px 10px 5px 0px rgba(0,0,0,0.76)"
//           padding={3}
//           margin={"auto"}
//           marginTop={3}
//           display="flex"
//           flexDirection={"column"}
//           width={"50%"}
//           sx={{ width:"80%" ,display: { xs: 'flex', md: 'flex' } }}
//         >
//           <Typography
//             fontWeight={"bold"}
//             padding={3}
//             variant="h4"
//             textAlign={"center"}
//           >
//           Create Your Blog
//           </Typography>
//           <InputLabel sx={labelStyles}>Title </InputLabel>
//           <TextField
//             name="title"
//             onChange={handleChange}
//             value={newBlog.title}
//             margin="auto"
//             variant="outlined"
          
//           />
//           <InputLabel sx={labelStyles}>Content</InputLabel>
//           <TextField
//             name="content"
//             onChange={handleChange}
//             value={newBlog.content}
//             margin="auto"
//             variant="outlined"
//           />
//           <InputLabel sx={labelStyles}>ImageURL</InputLabel>
//           <TextField
//             name="imageURL"
//             onChange={handleChange}
//             value={newBlog.imageURL}
//             margin="auto"
//             variant="outlined"
//           />
//           <Button
//             sx={{ mt: 2, borderRadius: 4 }}
//             variant="contained"
//             color="secondary"
//             type="submit"
//           >
//           Create Blog
//           </Button>
//         </Box>
//       </form>
//     </div>
//   )
// }
import React, { useState, useEffect} from 'react';
import { styled, Box, TextareaAutosize, Button, InputBase, FormControl  } from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import {  Navigate, useLocation } from 'react-router-dom';
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
    categories: '',
    createdDate: new Date()
}

const CreateBlog = () => {
  
  // const navigate = useNavigate();
  const location = useLocation();
  const [blog, setBlog] = useState(initialBlog);
  const [file, setFile] = useState('');
  const url = blog.image ? blog.image : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //Api call
        const response = await axios.post('/file/upload', data);
        blog.image = response.data;
      }
    }
    getImage();
    blog.categories = location.search?.split('=')[1] || 'All';
    blog.user = localStorage.getItem("userId");
  }, [file])
  const savePost = async () => {
    await axios.post('/blog/create', blog);
    Navigate('/blog');
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
                <Button onClick={() => savePost()}  variant="contained" color="primary">Publish</Button>
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


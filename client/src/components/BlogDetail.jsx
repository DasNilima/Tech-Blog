import { Button, InputLabel, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const BlogDetail = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);
  
  const [newBlog, setNewBlog] = useState({})
  const handleChange = (e) => {
    setBlog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
    
  const BlogDetails = async () => {
    const res = await axios
      .get(`/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    BlogDetails().then((data) => {
      setBlog(data.blog);
      setNewBlog({
        title: data.blog.title,
        content: data.blog.content,
      });
    });
  });
  const sendRequest = async () => {
    const res = await axios
      .put(`/blog/${id}`, {
        title: newBlog.title,
        content: newBlog.content,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  console.log(blog);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBlog);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myBlogs"));
  };
  return (
    <div>
      {newBlog && (
        <form onSubmit={handleSubmit}>
          <Box
          border={3}
          borderColor="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
          borderRadius={10}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin={"auto"}
          marginTop={3}
          display="flex"
          flexDirection={"column"}
          width={"50%"}
          >
          <Typography
          fontWeight={"bold"}
          padding={3}
          color="grey"
          variant="h3"
          textAlign={"center"}
          >
          Create Your Blog
          </Typography>
          <InputLabel sx={labelStyles}>Title </InputLabel>
          <TextField
            name="title"
            onChange={handleChange}
            value={newBlog.title}
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>Content</InputLabel>
          <TextField
            name="content"
            onChange={handleChange}
            value={newBlog.content}
            margin="auto"
            variant="outlined"
          />
          <InputLabel sx={labelStyles}>ImageURL</InputLabel>
          <TextField
            name="imageURL"
            onChange={handleChange}
            value={newBlog.imageURL}
            margin="auto"
            variant="outlined"
          />
          <Button
            sx={{ mt: 2, borderRadius: 4 }}
            variant="contained"
            color="secondary"
            type="submit"
          >
          Update Blog
          </Button>
        </Box>
        </form>
      )}
    </div>
  )
}

export default BlogDetail
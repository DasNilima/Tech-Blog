import { Box, Button, InputLabel, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const labelStyles = { mb: 1, mt: 2, fontSize: "24px", fontWeight: "bold" };

const CreateBlog = () => {
  const navigate = useNavigate();
  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    imageURL: "",
  });
  const handleChange = (e) => {
    setNewBlog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
}));
  };
  const sendRequest = async () => {
    const res = await axios
      .post("/blog/create", {
        title: newBlog.title,
        content: newBlog.content,
        image: newBlog.imageURL,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => console.log(err));
      const data = await res.data;
      return data;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newBlog);
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/myblogs"));
  };
  return (
    <div>
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
          Create Blog
          </Button>
        </Box>
      </form>
    </div>
  )
}


export default CreateBlog
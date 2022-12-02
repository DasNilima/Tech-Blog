import React from "react";
import {
    Avatar,
    Box,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    IconButton,
    Typography,
} from "@mui/material";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blog = ({ title, content, imageURL, userName, isUser, id }) => {
    const navigate = useNavigate();
    const handleEdit = () => {
        navigate(`/myBlogs/${id}`);
    };
    const deleteRequest = async () => {
        const res = await axios
        .delete(`/blog/${id}`)
        .catch((err) => console.log(err));
    const data = await res.data;
    return data;
    };
    const handleDelete = () => {
    deleteRequest()
        .then(() => navigate("/"))
        .then(() => navigate("/myBlogs"));
    };
    return (
        <div>
            {" "}
            <Card
            sx={{
                maxWidth: 345,
                margin: "auto",
                mt: 2,
                padding: 2,
                boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.76)",
                ":hover": {
                boxShadow: "10px 10px 20px #ccc",
                },
                }}
            >
            {isUser && (
                <Box display="flex" >
                <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
                    <ModeEditOutlineIcon color="warning" />
                </IconButton>
                <IconButton onClick={handleDelete}>
                    <DeleteForeverIcon color="error" />
                </IconButton>
                </Box>
            )}
            <CardHeader
                avatar={
                <Avatar
                    sx={{ bgcolor: "red" }}
                    aria-label="recipe"
                >
                    {userName ? userName.charAt(0) : ""}
                </Avatar>
                }
                title={title}
            />
            <CardMedia
                component="img"
                height="194"
                image={imageURL}
                alt="blog"
            />
            <CardContent>
                <hr />
                <Typography
                variant="body2"
                color="text.secondary"
                >
                <b>{userName}</b> {": "} 
                {content}
                </Typography>
            </CardContent>
        </Card>
    </div>
    );
};

export default Blog;
// import React from "react";
// import {
//     Avatar,
//     Box,
//     Card,
//     CardContent,
//     CardHeader,
//     CardMedia,
//     IconButton,
//     Typography,
// } from "@mui/material";
// import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Blog = ({ title, content, imageURL, userName, isUser, id }) => {
//     const navigate = useNavigate();
//     const handleEdit = () => {
//         navigate(`/myBlogs/${id}`);
//     };
//     const deleteRequest = async () => {
//         const res = await axios
//         .delete(`/blog/${id}`)
//         .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//     };
//     const handleDelete = () => {
//     deleteRequest()
//         .then(() => navigate("/"))
//         .then(() => navigate("/myBlogs"));
//     };
//     return (
//         <div>
//             {" "}
//             <Card
//             sx={{
//                 maxWidth: 345,
//                 margin: "auto",
//                 mt: 2,
//                 padding: 2,
//                 boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.76)",
//                 ":hover": {
//                 boxShadow: "10px 10px 20px #ccc",
//                 },
//                 }}
//             >
//             {isUser && (
//                 <Box display="flex" >
//                 <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
//                     <ModeEditOutlineIcon color="warning" />
//                 </IconButton>
//                 <IconButton onClick={handleDelete}>
//                     <DeleteForeverIcon color="error" />
//                 </IconButton>
//                 </Box>
//             )}
//             <CardHeader
//                 avatar={
//                 <Avatar
//                     sx={{ bgcolor: "red" }}
//                     aria-label="recipe"
//                 >
//                     {userName ? userName.charAt(0) : ""}
//                 </Avatar>
//                 }
//                     title={title}
//                     subheader = {new Date().toDateString()}
//             />
//             <CardMedia
//                 component="img"
//                 height="194"
//                 image={imageURL}
//                 alt="blog"
//             />
//             <CardContent>
//                 <hr />
//                 <Typography
//                 variant="body2"
//                 color="text.secondary"
//                 >
//                 <b>{userName}</b> {": "} 
//                 {content}
//                 </Typography>
//             </CardContent>
//         </Card>
//     </div>
//     );
// };
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;

const Blog = ({ blog }) => {
    const url = blog.image ? blog.image : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80';
    
    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    } 

    return (
        <Container>
            <Image src={url} alt="blog" />
            <Text>{blog.categories}</Text>
            <Heading>{addEllipsis(blog.title, 20)}</Heading>
            <Text>Author: {blog.user.name}</Text>
            <Details>{addEllipsis(blog.content, 100)}</Details>
        </Container>
    )
}
export default Blog;
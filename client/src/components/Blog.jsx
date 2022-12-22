// import React, { useEffect, useState } from "react";
import axios from "axios";
import Blog from "./Blogs.jsx";
import Categories from './Categories';
import { useEffect, useState } from 'react';

import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/blog", category || '');
            const data = await res.data;
            return setBlogs(data.blogs);
        }
        fetchData();
    }, [category]);
        ;
    //     useEffect(() => {
    // sendRequest().then((data) => setBlogs(data.blogs));
    // },[]);
    // console.log(blogs);
    return (
        // <>
            
        //     <Grid item lg={2} xs={12} sm={2}>
        //             <Categories />
        //         </Grid>
        
        //     {blogs?.length ?
        //         blogs.map(blog => (
        //             <Grid item xs={12} sm={10} lg={10}>
        //                 <Blog
        //                     id={blog._id}
        //                     key={index}
        //                     isUser={localStorage.getItem("userId") === blog.user._id}
        //                     title={blog.title}
        //                     content={blog.content}
        //                     imageURL={blog.image}
        //                     userName={blog.user.name}
        //                     date={blog.createdAt}
                    
        //                 />
        
        //             </Grid>)
        // </>
        <>
        <Grid container>
            <Grid item lg={2} xs={12} sm={2}>
                <Categories />
            </Grid>
        
            {
            blogs?.length ? blogs.map(blog => (
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${blog._id}`}>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Blog blog={blog} />
                    </Grid>
                    </Link>
                
            )) : <Box style={{color: 'black', margin: '30px 80px', fontSize: 18}}>
                    No data is available for selected category
                </Box>
                }
        </Grid>
    </>
    );
};

export default Blogs;


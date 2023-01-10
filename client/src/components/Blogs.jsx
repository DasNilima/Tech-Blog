import Blog from "./Blog";
import { useEffect, useState } from 'react';
import { Grid, Box } from '@mui/material';
import { Link, useSearchParams } from 'react-router-dom';
import { API } from '../service/api';

const Blogs = () => {
    const [blogs, setBlogs] = useState();
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            const res = await API.getAllBlog({ category : category || '' });
            const data = await res.data;
            return setBlogs(data.blogs);
        }
        fetchData();
    }, [category]);
        ;
    return (
        <>
            {
                blogs?.length ? blogs.map((blog,index) => (
            <Grid item lg={3} sm={4} xs={12}>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={`details/${blog._id}`}>
                            <Blog blog={blog}
                            key={index}/>
                </Link>
            </Grid> 
                
            )) : <Box style={{color: 'black', margin: '30px 80px', fontSize: 18}}>
                    No data is available for selected category
                </Box>
                }
    </>
    );
};

export default Blogs;
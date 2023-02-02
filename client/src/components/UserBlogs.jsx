import React, { useEffect, useState } from "react";
import { API } from '../service/api';
import { Grid, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Blog from "./Blog";
import Header from './Header';

const UserBlogs = () => {
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
        let response = await API.getByUserId(id);
        if (response.isSuccess) {
            setUser(response.data.user);
        }
    }
    fetchData();
  }, [id]);
  
return (
  <>
    <Header/>
      { user &&
              user.blogs?.length ? user.blogs.map((blog,index) => (
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

export default UserBlogs;
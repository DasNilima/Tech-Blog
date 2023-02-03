import { useState, useEffect, useContext } from 'react';
import { Box, Typography, styled } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import Comments from './comments/Comments';
import Header from '../Header';

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
      margin: 0
  },
}));

const Image = styled('img')({
  width: '100%',
  height: '50vh',
  objectFit: 'cover'
});

const EditIcon = styled(Edit)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const DeleteIcon = styled(Delete)`
  margin: 5px;
  padding: 5px;
  border: 1px solid #878787;
  border-radius: 10px;
`;

const Heading = styled(Typography)`
  font-size: 38px;
  font-weight: 600;
  text-align: center;
  margin: 50px 0 10px 0;
  word-break: break-word;
`;

const Author = styled(Box)(({ theme }) => ({
  color: '#878787',
  display: 'flex',
  margin: '20px 0',
  [theme.breakpoints.down('sm')]: {
      display: 'block'
  },
}));

// const content = styled(Typography)`
//     word-break: break-word;
// `
const BlogDetail = () => {
  const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

  const [blog, setBlog] = useState({});
  const { account } = useContext(DataContext);
  const navigate = useNavigate();
  const { id } = useParams();


useEffect(() => {
    const fetchData = async () => {
        let response = await API.getBlogById(id);
        if (response.isSuccess) {
            setBlog(response.data.blog);
        }
    }
    fetchData();
}, [id]);

const deleteBlog = async () => {  
    await API.deleteBlog(blog._id);
    navigate('/home')
}
  return (
    <>
      <Header/>
    <Container>
        <Image src={blog.image || url} alt="blog" />
          <Box style={{ float: 'right' }}>
              { account.username === blog.username }
                <>
                  <Link to={`/update/${blog._id}`}><EditIcon color="primary" /></Link>
                  <DeleteIcon onClick={() => deleteBlog()} color="error" />
                </>
          </Box>
          <Heading>{blog.title}</Heading>
        <Author>
            <Link to={`/?username=${blog.username}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography>Author: <span style={{fontWeight: 600}}>{blog.username}</span></Typography>
            </Link>
            <Typography style={{marginLeft: 'auto'}}>{new Date(blog.createdDate).toDateString()}</Typography>
        </Author>
      <Typography>{blog.content}</Typography>
      <Comments blog={blog} />
      </Container>
      </>
)
}

export default BlogDetail;
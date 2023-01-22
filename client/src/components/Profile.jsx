import {useState,useEffect} from 'react'
import {
    Stack, TextField, Box, Button, styled, Typography
} from '@mui/material';
import { AddCircle as Add } from '@mui/icons-material';
import { useNavigate} from 'react-router-dom';
// import { DataContext } from '../../context/DataProvider';
import { API } from '../service/api';
import axios from 'axios';

const Container = styled(Box)`
    padding: 50px;
    max-width: 60%;
    margin: auto;
`
const Heading = styled(Typography)`
    font-size: 18px;
    margin: 5px;
    display: flex;
    justify-content: flex-start;
    position: relative;
    font-weight: 500;
`;
const Image = styled('img')({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '150px',
    height: '150px',
    zIndex: '2',
    borderRadius: '50%',
    objectFit: 'cover',
});
const initialValue = {
    username: '',
    email: '',
    password: '',
    profilePic: '',
}
const Profile = () => {
    const [profile, setProfile] = useState(initialValue)
    const [file, setFile] = useState(null)
    const [isDisabled, setIsDisabled] = useState(true);
    const [temp, setTemp] = useState(null);
    const [imageURL, setImageURL] = useState('');
    const navigate = useNavigate();
    const id = localStorage.getItem("userId");
    const url = profile.profilePic ? profile.profilePic : 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';

    const handleDisabled = e => {
        setIsDisabled(false)
        setTemp(profile)
    }
    const handleClose = e => {
        setIsDisabled(false)
        setTemp(profile)
    }

    const handleCancel = e => {
        setIsDisabled(true)
        setProfile(temp)
        setTemp(null)
    }

    const handleUpdate = e => {
        setIsDisabled(true)
        updateUser(profile)
    }
useEffect(() => {
    const fetchData = async () => {
        let response = await API.getByUserId(id);
        // if (response.isSuccess) {
        //     setProfile(response.data.profile);
        // }
        const data = await response.data;
        return setProfile(data.profile);
    }
    fetchData();
}, []);

useEffect(() => {
    const getImage = async () => {
    if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);
    //Api call
    const response = await axios.post('/file/upload', data );
        profile.profilePic = response.data;
        setImageURL(response.data);  
    }
}
getImage();
}, [file])

const updateUser = async () => {
    await API.updateUser(profile);
    navigate(`/home`);
}

const handleChange = (e) => {
    setProfile({ ...Profile, [e.target.name]: e.target.value });
}
    return (
        <Container>
            <Stack spacing={2}>
                {isDisabled
                    ?   <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                            <Button onClick={handleDisabled}>Edit</Button>
                        </Box>
                    : null
                }
                <Heading>Profile</Heading>
                <Image src={url} onClick={handleClose} />
                <label htmlFor="fileInput">
                <Add fontSize="large" color="action" />
                </label>
                <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                />
                <TextField
                    label="Username" name='username'
                    value={profile.username }
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e)} 
                />
                <TextField
                    label="Email" name='email'
                    value={profile.email}
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e)} 
                />
                <TextField
                    label="Password" name='password'
                    value={profile.password}
                    disabled={isDisabled}
                    onChange={(e) => handleChange(e)} 
                />
                {!isDisabled
                    ?   <Stack spacing={2} direction='row'>
                            <Button onClick={handleUpdate}  variant="contained" color="primary">Update</Button>
                            <Button onClick={handleCancel}>Cancel</Button>
                        </Stack>
                    : null
                }
                
            </Stack>
        </Container>
    
    )
}

export default Profile;
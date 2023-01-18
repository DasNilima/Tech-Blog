import {useState, useEffect} from 'react'
import {
    Container, Stack, TextField, Box, Button
} from '@mui/material'
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
    const [profile, setProfile] = useState({})
    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState();
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(!currentUser) {
    //         getProfile();
    //     }

    //     if(currentUser) {
    //         setProfile(currentUser)
    //     }
    // },[currentUser, getProfile])

    const handleDisabled = e => {
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
        // updateUser(profile)
    }
    
    return (
            <Container maxWidth="md" sx={{my: 3}}>
                <Stack spacing={2}>
                    {isDisabled
                        ?   <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button onClick={handleDisabled}>Edit</Button>
                            </Box>
                        : null
                    }
                        
                    <TextField
                        label="First Name" name='firstName'
                        value={profile.firstName} disabled={isDisabled}
                        onChange={(e) => setProfile({...profile, firstName: e.target.value})}
                    />
                    <TextField
                        label="Last Name" name='lastName'
                        value={profile.lastName} disabled={isDisabled}
                        onChange={(e) => setProfile({...profile, lastName: e.target.value})}
                    />
                    <TextField
                        label="Location" name='location'
                        value={profile.location} disabled={isDisabled}
                        onChange={(e) => setProfile({...profile, location: e.target.value})}
                    />
                    {!isDisabled
                        ?   <Stack spacing={2} direction='row'>
                                <Button onClick={handleUpdate}>Update</Button>
                                <Button onClick={handleCancel}>Cancel</Button>
                            </Stack>
                        : null
                    }
                    
                </Stack>
            </Container>
    )
}

export default Profile;
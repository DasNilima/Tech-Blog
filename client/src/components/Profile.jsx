// import React, { useContext, useState } from "react"
// import {
//     Stack, TextField, Box, Button, styled, Typography
// } from '@mui/material';
// import { AddCircle as Add } from '@mui/icons-material';
// // import { authContext } from '../context/authContext';
// // import { API } from '../service/api';
// import axios from 'axios';



// const Container = styled(Box)`
//     padding: 50px;
//     max-width: 60%;
//     margin: auto;
// `
// const Heading = styled(Typography)`
// font-size: 30px;
// line-height: 1;
// text-align: center;
// `;
// const SubHeading = styled(Typography)`
//     font-size: 18px;
//     margin: 5px;
// `;
// const Image = styled('img')({
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     width: '150px',
//     height: '150px',
//     zIndex: '2',
//     borderRadius: '50%',
//     objectFit: 'cover',
// });

// const Profile = () => {

//     const [username, setUsername] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [file, setFile] = useState(null)
//     const [isDisabled, setIsDisabled] = useState(true);
//     const [success, setSuccess] = useState(false);
//     const [temp, setTemp] = useState(null);
//     // const { currentUser } = useContext(authContext)
//     // const user = localStorage.getItem("user");

//     const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
//     // const [user, setUser] = useState(
//     //     JSON.parse(localStorage.getItem("user")) || null
//     // );
    
//     // useEffect(() => {
//     //     localStorage.setItem("user", JSON.stringify(user));
//     // }, [user]);
    
//     const handleDisabled = e => {
//         setIsDisabled(false)
//         // setTemp(profile)
//     }
//     // const handleClose = e => {
//     //     setIsDisabled(false)
//     //     // setTemp(profile)
//     // }

//     const handleCancel = e => {
//         setIsDisabled(true)
//         // setProfile(temp)
//         setTemp(null)
//     }

//     // const handleUpdate = e => {
//     //     setIsDisabled(true)
//     //     // updateUser(profile)
//     // }

//     const handleSubmit = async (e) => {
//         e.preventDefault()
//         const updateUser = {
//           user: user._id,
//           username,
//           email,
//           password,
//         }
//         if (file) {
//             const data = new FormData()
//             const filename = Date.now() + file.name
//             data.append("name", filename)
//             data.append("file", file)
//             updateUser.photoURL= filename
//             try {
//               await axios.post("/file/upload", data)
//             } catch (error) {
//               console.log(error)
//             }
//           }
//           try {
//             const res = await axios.put("/" , updateUser)
//             setSuccess(true);
//             window.location.reload()
//           } catch (error) {
//           }
//         }
    
//     return (
//         <form  onSubmit={handleSubmit}>
//         <Container>
//             <Heading>Update Your Account</Heading>
//             <Stack spacing={2}>
//                 {isDisabled
//                     ?   <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
//                         <Button onClick={handleDisabled}>Edit</Button>
//                         <Button onClick={handleDisabled}>Delete</Button>
//                         </Box>
//                     : null
//                 }
//                     <SubHeading>Profile Picture</SubHeading>
//                 <Image src={file ? URL.createObjectURL(file) : url +user.photoURL} />
//                 <label htmlFor="fileInput">
//                 <Add fontSize="large" color="action" />
//                 </label>
//                 <input
//                     type="file"
//                     id="fileInput"
//                     style={{ display: "none" }}
//                     onChange={(e) => setFile(e.target.files[0])}
//                 />
//                 <TextField
//                     label="Username" name='username'
//                     placeholder={user.username}
//                     disabled={isDisabled}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <TextField
//                     label="Email" name='email'
//                     placeholder={user.email}
//                     disabled={isDisabled}
//                     onChange={(e) => setEmail(e.target.value)}
//                     />
//                 <TextField
//                     label="Password" name='password'
//                     disabled={isDisabled}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {!isDisabled
//                     ?   <Stack spacing={2} direction='row'>
//                             <Button type="submit" variant="contained" color="primary">Update</Button>
//                             {success && (
//             <span
//               style={{ color: "green", textAlign: "center", marginTop: "20px" }}
//             >
//               Profile has been updated...
//             </span>
//           )}
//                             <Button onClick={handleCancel}>Cancel</Button>
//                         </Stack>
//                     : null
//                 }
//             </Stack>
//         </Container>
//         </form>
//     )
// }

// export default Profile;
// import { createContext, useState, useEffect } from 'react';

// export const CurrentUser = createContext()

// function CurrentUserProvider({ children }) {
//     const [currentUser, setCurerntUser] = useState(null)
//     useEffect(() => {
//         // Fetch the current user on page load
//         const getLoggedUser = async () => {
//             let response = await fetch('/user/profile', {
//                 // Include the JWT in fetch requests
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`
//             }
//             })
//             let user = await response.json()
//             setCurerntUser(user)
//         }
//         getLoggedUser()
//     }, [])
//     return (
//         <CurrentUserProvider value= {{currentUser, setCurerntUser}}>
//             {children}
//         </CurrentUserProvider>
//     )
// }
// export default CurrentUserProvider
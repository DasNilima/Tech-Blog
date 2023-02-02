// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContexProvider = ({ children }) => {
//   const [user, setUser] = useState(
//     JSON.parse(localStorage.getItem("user")) || null
//   );

//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(user));
//   }, [user]);

//   return (
//     <AuthContext.Provider value={{ user}}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

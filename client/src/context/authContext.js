


// const initState = {
//   //user: null,
//   user: JSON.parse(localStorage.getItem("user")) || null,
//   FetchData: false,
//   error: false,
// }

// export const Context = createContext(initState)

// // setp 2
// export const ContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(Reducer, initState)

//   // setp 3 // login ma
//   useEffect(() => {
//     localStorage.setItem("user", JSON.stringify(state.user))
//   }, [state.user])

//   return (
//     <Context.Provider
//       value={{
//         user: state.user,
//         FetchData: state.FetchData,
//         error: state.error,
//         dispatch,
//       }}
//     >
//       {children}
//     </Context.Provider>
//   )
// }

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

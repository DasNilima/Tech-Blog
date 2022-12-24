import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { authActions } from "./store";


//components
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Header from './components/Header';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';


function App() {
  const dispath = useDispatch();

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);
  return (

    <React.Fragment>
        <header>
          <Header/>
        </header>
    <main>
        <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path="/Signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/logout" element={<Login />}></Route>
              <Route path="/create" element={<CreateBlog />}></Route>
              <Route path="myBlogs" element={<UserBlogs />}></Route>
              <Route path="/myBlogs/:id" element={<BlogDetail />}></Route> 
        </Routes>
    </main>
      </React.Fragment>
  );
}

export default App;

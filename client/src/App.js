import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { authActions } from "./store";


//components
import Home from './components/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Header from './components/Header';
import Blogs from './components/Blogs';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/BlogDetail';
import CreateBlog from './components/CreateBlog';
import Profile from './components/Profile';


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
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="Profile" element={<Profile />}></Route>
              <Route path="/AllBlogs" element={<Blogs />}></Route>
              <Route path="/CreateBlog" element={<CreateBlog />}></Route>
              <Route path="myBlogs" element={<UserBlogs />}></Route>
              <Route path="/myBlogs/:id" element={<BlogDetail />}></Route> 
        </Routes>
    </main>
      </React.Fragment>
  
  );
}

export default App;

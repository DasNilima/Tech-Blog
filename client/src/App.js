import './App.css';
import {Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { authActions } from "./store";
import DataProvider from './context/DataProvider';


//components
import Home from './components/Home';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Header from './components/Header';
import UserBlogs from './components/UserBlogs';
import BlogDetail from './components/details/BlogDetail';
import CreateBlog from './components/create/CreateBlog';
import Update from './components/create/Update';
import About from './components/About';
import Contact from './components/Contact';

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
        <DataProvider>
        <Routes>
              <Route path='/Home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />
              <Route path="/Signup" element={<Signup />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/logout" element={<Login />}></Route>
              <Route path="/create" element={<CreateBlog />}></Route>
              <Route path="myBlogs" element={<UserBlogs />}></Route>
              <Route path="/myBlogs/details/:id" element={<BlogDetail />}></Route> 
              <Route path="/Home/details/:id" element={<BlogDetail />}></Route>
              <Route path="/update/:id" element={<Update />}></Route>
            </Routes>
        </DataProvider>
    </main>
      </React.Fragment>
  );
}

export default App;

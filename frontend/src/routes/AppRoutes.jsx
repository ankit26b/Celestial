import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Home from '../screens/Home'
import Project from '../screens/Project'
import UserAuth from '../auth/UserAuth'
import Launch from '../screens/Launch'

const AppRoutes = () => {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element = {<Launch/>}/>
          <Route path="/home" element = {<UserAuth><Home/></UserAuth>}/>
          <Route path="/login" element = {<Login/>}/>
          <Route path="/register" element = {<Register/>}/>
          {/* <Route path="/project" element = {<UserAuth><Project/></UserAuth>}/> */}
          <Route path="/project" element = {<Project/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
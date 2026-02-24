import React from "react"
import { RouterProvider , createRoutesFromElements , createBrowserRouter, Route } from 'react-router-dom'
import Login from "../Component/Login"
import { Register } from "../Component/Register"
import { Home } from "../Component/Home"
import { AddCourse } from "../Admin/AddCourse"
import {  AddStudent } from "../Admin/AddStudent"
import { AddProfessor } from "../Admin/AddProfessor"
import { AdminLayout } from "../Admin/AdminLayout"
function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/admin/:id" element={ <AdminLayout /> } >
                <Route path="/admin/:id/addcourse" element={ <AddCourse /> } />
                <Route path="/admin/:id/addstudent" element={ <AddStudent /> } />
                <Route path="/admin/:id/addprofessor" element={ <AddProfessor /> } />
          </Route>
        </>
      )
    )
    return(
      <RouterProvider  router={router} />
    )
}

export default App

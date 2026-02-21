import React from "react"
import { RouterProvider , createRoutesFromElements , createBrowserRouter, Route } from 'react-router-dom'
import Login from "../Component/Login"
import { Register } from "../Component/Register"
import { Home } from "../Component/Home"
function App() {
    const router = createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={ <Home /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
        </>
      )
    )
    return(
      <RouterProvider  router={router} />
    )
}

export default App

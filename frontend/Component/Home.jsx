import React from "react";
import { NavLink } from "react-router-dom";


export const Home = () => {
    return(
        <>
            <NavLink to="/login" >Login</NavLink>
            <br />
            <br />
            <NavLink to="/register" >Register</NavLink>
        </>
    )
}
import React from "react";
import { NavLink } from "react-router-dom";
export const AdminHeader = () => {
    return (
        <>
            {/* Here is the nac link */}
            <div className="flex flex-row justify-evenly space-x-10 bg-purple-800 text-white pt-5" >
                <NavLink  className={({ isActive }) => isActive ? "text-red-500" : ""} to="/admin/:id/addcourse" >Add Course</NavLink>
                <br />
                <br />
                <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/admin/:id/addstudent" >Add Student</NavLink>
                <br />
                <br />
                <NavLink className={({ isActive }) => isActive ? "text-red-500" : ""} to="/admin/:id/addprofessor" >Add Professor</NavLink>
            </div>
        </>
    )
}
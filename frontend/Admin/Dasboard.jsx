import {NavLink} from "react-router-dom";

export const Dashboard = () => {
    return(
        <div className="h-screen w-screen flex flex-col justify-evenly space--10 items-center" >
            <NavLink to="/admin/:id/addcourse" >Add Course</NavLink>
            <br />
            <br />
            <NavLink to="/admin/:id/addstudent" >Add Student</NavLink>
            <br />
            <br />
            <NavLink to="/admin/:id/addprofessor" >Add Professor</NavLink>
        </div>
    )
}
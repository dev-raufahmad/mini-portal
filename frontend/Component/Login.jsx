import React from "react";
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, watch } = useForm();

    const formHandle = async (data) => {
        console.log("Here is the data : " , data);
        const reponce = await fetch('http://localhost:3000/login' , {
            method : 'POST',
            headers :{
                'content-type' : 'application/json'
            },
            body : JSON.stringify({
                email : data.email,
                password : data.password,
                type : data.role
            }),
            credentials : "include"
        })
        console.log("Here is the Responce : " , await reponce.json());
    }
    return (
        // Here is the main div
        <form onSubmit={handleSubmit(formHandle)}>
            <div className="flex flex-col justify-center items-center  h-screen w-screen bg-gray-700" >
                {/* Here is the div which will have all the components */}
                <div className="space-y-10 flex flex-col border-4 justify-center items-center h-screen w-220 border-white" >
                    <h1 className="text-white text-center text-4xl font-serif font-bold" >Login Page</h1>
                    {/* Here is the email named input div */}
                    <div className="flex flex-col items-center space-y-4 placeholder:px-2" >
                        
                        <label className=" text-white text-2xl" >Email</label>
                        <input className="text-white px-2 w-60 border-2 focus:border-purple-800 rounded-md h-10" type="email" placeholder="Enter your email" {...register('email')} />
                    </div>
                    {/* Here is the password div */}
                    <div className="flex flex-col items-center space-y-4 placeholder:px-2" >
                        {/* Here is the email named input div */}
                        <label className=" text-white text-2xl" >Password</label>
                        <input className="text-white px-2 w-60 border-2 focus:border-purple-800 rounded-md h-10" type="password" placeholder="Enter your password" {...register('password')} />
                    </div>
                    {/* Here is the login type selection */}
                    <div>
                        <select className="w-28 h-10 text-center rounded-lg bg-gray-400" {...register('role')}>
                            <option value="Admin">Admin</option>
                            <option value="Professor">Professor</option>
                            <option value="Student">Student</option>
                        </select>
                    </div>
                    {/* Here is the submit button */}
                    <div className="  text-center font-serif font-bold " >
                        <button className="w-30 h-12 rounded-lg bg-blue-700 text-white pt-1 hover:bg-blue-500 transition-all duration-200" type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    )
}



export default Login;
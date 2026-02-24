// import React from "react";
// import { useForm } from "react-hook-form"
// import { useParams } from "react-router-dom";
// export const AddCourse = () => {
//     const { id } = useParams();
//     const { watch, register, handleSubmit } = useForm();
//     const courseName = watch("coursename");
//     const credits = watch("credithours");

//     const formSubmitter = (data) => {
//         console.log("Here is the data : " , data);
//     }
//     return (
//         <div className="flex flex-col justify-start h-screen w-screen bg-blue-800" >
//             <h1>Here is the course name : {courseName}</h1>
//             <h1>Here are the course credits : {credits}</h1>
//             <form onSubmit={handleSubmit(formSubmitter)}>
//                 {/* This is the course name div */}
//                 <div className="flex flex-col space-y-2 text-white text-2xl font-semibold font-serif" >
//                     <label >Enter course name</label>
//                     <input type="text" placeholder="CourseName" {...register("coursename")} />
//                 </div>
//                 {/* This is the course credit hourse div */}
//                 <div className="flex flex-col space-y-2 text-white text-2xl font-semibold font-serif" >
//                     <label >Enter course credit hours</label>
//                     <input type="number" placeholder="credithours" {...register("credithours" , {
//                         min : 0,
//                         max : 4
//                     } )} />
//                 </div>
//                 <div className="bg-blue-500 text-2xl text-white flex flex-row justify-center" >
//                     <button className="w-full" type="submit">Submit</button>
//                 </div>
//             </form>
//         </div>
//     )
// }



import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

export const AddCourse = () => {
    const { id } = useParams();
    const { watch, register, handleSubmit } = useForm();
    const courseName = watch("coursename");
    const credits = watch("credithours");
    const hasLab = watch("haslab");

    const formSubmitter = async (data) => {
        console.log("Here is the data : ", data);
        const responce = await fetch(`http://localhost:3000/admin/${id}/addcourse` , {
            method : "POST",
            body : JSON.stringify(
                {
                courseName : data.coursename,
                credithours : data.credithours,
                haslab : data.haslab
            }),
            credentials : 'include',
            headers : {
                'content-type' : 'application/json'
            }
        })
        console.log("Here is the reponce of the req : " , await responce.json());
        
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen w-full bg-linear-to-b from-blue-800 to-blue-600 p-8">
            <h1 className="text-white text-3xl font-bold mb-2">
                Here is the course name: <span className="text-yellow-300">{courseName}</span>
            </h1>
            <h1 className="text-white text-3xl font-bold mb-2">
                Here is the course name: <span className="text-yellow-300">{hasLab}</span>
            </h1>
            <h1 className="text-white text-3xl font-bold mb-8">
                Here are the course credits: <span className="text-yellow-300">{credits}</span>
            </h1>

            <form 
                onSubmit={handleSubmit(formSubmitter)}
                className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md"
            >
                {/* Course Name */}
                <div className="flex flex-col mb-6">
                    <label className="text-gray-700 text-lg font-medium mb-2">Enter course name</label>
                    <input 
                        type="text" 
                        placeholder="Course Name" 
                        {...register("coursename")}
                        className="border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Course Credits */}
                <div className="flex flex-col mb-6">
                    <label className="text-gray-700 text-lg font-medium mb-2">Enter course credit hours</label>
                    <input 
                        type="number" 
                        placeholder="Credit Hours" 
                        {...register("credithours", { min: 0, max: 4 })}
                        className="border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col" >
                    <label className="text-gray-700 text-lg font-medium mb-1" >Course Has Lab</label>
                    <input className="w-5 h-5" type="checkbox" {...register("haslab")} />
                </div>

                {/* Submit Button */}
                <button 
                    type="submit"
                    className="w-full bg-blue-500 mt-5 text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};
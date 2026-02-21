import React from "react";

import { useParams } from "react-router-dom";
export const AddCourse = () => {
    const { id } = useParams();
    return (
        <>
            <h1>Here is the add Course logic</h1>
            <h1>Here is the id of the admin : { id }</h1>
        </>
    )
}


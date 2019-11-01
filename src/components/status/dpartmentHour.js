import React, { useState } from 'react'


const DepartmentHour = props => {

    const [projects, setProjects] = useState()

    const getProjects = () => {
        fetch(`http://localhost:8000/projectbudget`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
            }
        })
        .then(res => res.json())
        .then(setProjects)
    }


    return (
        <>

        </>
    )

}
export default DepartmentHour
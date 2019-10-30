import React, { useEffect, useState } from "react";
import { Card } from 'semantic-ui-react'
import ProjectDeptCard from '../project/projectDeptCard'


const HomePage = props => {
    const [projectdepts, setProjectDept] = useState([])
    const [open, setConfirm] = useState(false)

    const getProjectDepts = () => {
        fetch("http://localhost:8000/projectdepartments", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`
            }
        })
        .then(res => res.json())
        .then(setProjectDept)
    }

    const deleteProjectDept = (id) => {
        fetch(`http://localhost:8000/projectdepartments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("budgetapp_token")}`
            }
        })
        .then(() => {
            getProjectDepts()
            setConfirm(!open)
        })
    }

    useEffect(() => {
        getProjectDepts()}, []
    )


    return (
    <>
        {projectdepts.map(projectdept =>
        <Card key={projectdept.id}>
        {console.log(projectdept)}
            <ProjectDeptCard projectDept={projectdept} delete={deleteProjectDept} open={open} setConfirm={setConfirm} />
        </Card>
        )}
    </>
    )
}
export default HomePage
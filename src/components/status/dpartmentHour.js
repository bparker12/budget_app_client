import React, { useState, useEffect } from 'react'
import { Header, Card } from 'semantic-ui-react'
import ProjectCard from '../project/projectCard'


const DepartmentHour = props => {

    const [projects, setProjects] = useState([])

    const getProjects = () => {
        fetch(`http://localhost:8000/projectbudgets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
            }
        })
        .then(res => res.json())
        // .then(res => console.log(res))
        .then(setProjects)
    }

useEffect(() => {
    getProjects()}, [])


    return (
        <>
            <Header>Status a Department for a Budget</Header>
            {projects.map(project =>
                 <div key={project.id}>
                 <Card>
                 <ProjectCard project_budget={project} />
                 </Card>
                </div>
            )}
        </>
    )

}
export default DepartmentHour
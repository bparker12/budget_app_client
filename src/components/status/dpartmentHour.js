import React, { useState, useEffect } from 'react'
import { Header, Card, Button } from 'semantic-ui-react'
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

    const openStatus = (id) => {
        props.history.push(`/projectbudget/${id}`)
    }

    return (
        <>
            <Header>Status a Department for a Budget</Header>
            {projects.map(project =>
                 <div key={project.id}>
                 <Card>
                 <ProjectCard project_budget={project} />
                 <Button primary color="green" onClick={() => console.log("works")}>Status</Button>
                 </Card>
                </div>
            )}
        </>
    )

}
export default DepartmentHour
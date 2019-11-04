// import React, { useState, useEffect } from 'react'
// import { Header, Card, Button } from 'semantic-ui-react'
// import ProjectCard from '../project/projectCard'


// const DepartmentHour = props => {

//     const [projects, setProjects] = useState([])

//     const getProjects = () => {
//         fetch(`http://localhost:8000/projectbudgets`, {
//             method: "GET",
//             headers: {
//                 "Content-Type": "application/json",
//                 "Accept": "application/json",
//                 "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
//             }
//         })
//         .then(res => res.json())
//         // .then(res => console.log(res))
//         .then(setProjects)
//     }

// useEffect(() => {
//     getProjects()}, [])

//     const openStatus = (id) => {
//         props.history.push(`/projectbudget/${id}`)
//     }

//     return (
//         <>
//             <Header>Status a Department for a Budget</Header>
//             {projects.map(project =>
//                  <div key={project.id}>
//                  <Card>
//                  <ProjectCard project_budget={project} />
//                  <Button primary color="green" onClick={() => props.history.push(`/projectbudgets/${project.id}`)}>Status</Button>
//                  </Card>
//                 </div>
//             )}
//         </>
//     )

// }
// export default DepartmentHour

import React, { useEffect, useState } from "react";
import { Card, Modal, Confirm } from 'semantic-ui-react'
import ProjectDeptCard from '../project/projectDeptCard'
import ProjectBudgetEdit from '../project/projectBudgetEdit'



const HomePage = props => {
    const [projectdepts, setProjectDept] = useState([])
    const [open, setConfirm] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [projId, setProj] = useState({})
    const [id, setId] = useState()

    const editModal = (proj) => {
        setProj(proj)
        setModal(!modalOpen)
    }

    const deleteConfirm = (id) => {
        setId(id)
        setConfirm(!open)
    }

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
            <ProjectDeptCard
                projectDept={projectdept}
                open={open}
                setConfirm={setConfirm}
                editModal={editModal}
                getProjectDepts={getProjectDepts}
                deleteConfirm={deleteConfirm}
                />
        </Card>
        )}
        <Confirm open={open} onCancel={() => setConfirm(!open)} onConfirm={() => deleteProjectDept(id)}></Confirm>
        <Modal
            size="small"
            open={modalOpen}
            onCancel={() => setModal(!open)}
            >
            <Modal.Content>
                <ProjectBudgetEdit
                projBudg={projId}
                setModal={setModal}
                modalOpen={modalOpen}
                getProjectDepts={getProjectDepts}
                />
            </Modal.Content>
        </Modal>
    </>
    )
}
export default HomePage
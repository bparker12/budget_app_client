import React, { useEffect, useState } from "react";
import { Card, Modal } from 'semantic-ui-react'
import ProjectDeptCard from '../project/projectDeptCard'
import ProjectBudgetEdit from '../project/projectBudgetEdit'



const HomePage = props => {
    const [projectdepts, setProjectDept] = useState([])
    const [open, setConfirm] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [projId, setProj] = useState({})

    const editModal = (proj) => {
        console.log("click")
        console.log(proj)
        setProj(proj)
        setModal(!modalOpen)
        console.log(open)
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
                delete={deleteProjectDept}
                open={open}
                setConfirm={setConfirm}
                editModal={editModal}
                getProjectDepts={getProjectDepts}
                />
        </Card>
        )}
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
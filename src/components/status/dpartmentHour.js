import React, { useEffect, useState } from "react";
import { Card, Modal, Confirm, Grid, Header } from 'semantic-ui-react'
import ProjectDeptCard from '../project/projectDeptCard'
import ProjectBudgetEdit from '../project/projectBudgetEdit'



const DepartmentHour = props => {
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
    <Header>All Projects and Departments</Header>
    <Grid centered padded relaxed>
        {projectdepts.map(projectdept =>
        <div key={projectdept.id}>
        <Grid.Row style={{'padding': 5}}>

            <Grid.Column >
                <Card fluid>
                    <ProjectDeptCard
                        {...props}
                        projectDept={projectdept}
                        open={open}
                        setConfirm={setConfirm}
                        editModal={editModal}
                        getProjectDepts={getProjectDepts}
                        deleteConfirm={deleteConfirm}
                        />
                </Card>
            </Grid.Column>
        </Grid.Row>
        </div>
        )}
    </Grid>
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
export default DepartmentHour
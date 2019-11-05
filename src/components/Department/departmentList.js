import React, { useEffect, useState }  from "react"
import { Header, Card, Button, Confirm, Modal, Grid } from 'semantic-ui-react'
import DepartmentCard from "./departmentCard"
import DepartmentEdit from './departmentEdit'


const DepartmentList = props => {
    const [deptartments, setDept] = useState([])
    const [open, setConfirm] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [currentId, setId] = useState()

    const getDepartments = () => {
        fetch(`http://localhost:8000/departments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
            }
        })
        .then(res => res.json())
        .then(setDept)
    }

    const deleteDept = (id) => {
        fetch(`http://localhost:8000/departments/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Token ${localStorage.getItem("budgetapp_token")}`
            }
        })
        .then(() => {
            getDepartments()
            setConfirm(!open)
        })
    }

    useEffect(() => {
        getDepartments()}, []
    )

    const handleDelete = (id) => {
        setId(id)
        setConfirm(!open)
    }

    const editModal = (object) => {
        setId(object)
        setModal(!open)
    }

    return (
        <>
        <Header as="h1"></Header>
        <Grid centered padded>
            {deptartments.map(dept =>
            <div key={dept.id}>
            <Grid.Row style={{'padding': 5}}>

            <Grid.Column>
            <Card >
                <DepartmentCard  dept={dept} />
                <Card.Content>
                        <Button onClick={() => editModal(dept)} color="teal">Edit</Button>
                        <Button onClick={() => handleDelete(dept.id)} color="vk">Delete</Button>
                </Card.Content>
            </Card>
            </Grid.Column>
            </Grid.Row>
            </div>
            )}
        <Confirm open={open} onCancel={() => setConfirm(!open)} onConfirm={() => deleteDept(currentId)} />
        <Modal
            size="small"
            open={modalOpen}
            onCancel={() => setModal(!modalOpen)}
            >
            <Modal.Content>
                <DepartmentEdit dept={currentId} setModal={setModal} modalOpen={modalOpen} getDept={getDepartments}/>
            </Modal.Content>
        </Modal>
        </Grid>
        </>
    )
}
export default DepartmentList
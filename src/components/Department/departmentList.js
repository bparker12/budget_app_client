import React, { useEffect, useState }  from "react"
import { Header, Card, Button, Confirm, Modal } from 'semantic-ui-react'
import DepartmentCard from "./departmentCard"
import DepartmentEdit from './departmentEdit'


const DepartmentList = props => {
    const [deptartments, setDept] = useState([])
    const [open, setConfirm] = useState(false)
    const [modalOpen, setModal] = useState(false)

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

    return (
        <>
        <Header as="h1"> Departments </Header>
            {deptartments.map(dept =>
            <Card key={dept.id}>
            <DepartmentCard  dept={dept} />
            <Button.Group widths='3'>
                    <div>
                    <Button onClick={() => setConfirm(!open)} color="red">Delete</Button>
                    <Confirm open={open} onCancel={() => setConfirm(!open)} onConfirm={() => deleteDept(dept.id)} />
                    </div>
                    <div>
                    <Modal
                        size="large"
                        open={modalOpen}
                        id={dept.id}
                        onCancel={() => setModal(!modalOpen)}
                        trigger={<Button onClick={() => setModal(!modalOpen)} color="olive">Edit</Button>}>
                        <Modal.Content>
                            <DepartmentEdit dept={dept} setModal={setModal} modalOpen={modalOpen} getDept={getDepartments}/>
                        </Modal.Content>
                    </Modal>
                    </div>
                </Button.Group>
            </Card>
            )}
        </>
    )
}
export default DepartmentList
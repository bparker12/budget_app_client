import React, { useEffect, useState }  from "react"
import { Header, Card, Button, Confirm } from 'semantic-ui-react'
import DepartmentCard from "./departmentCard"


const DepartmentList = props => {
    const [deptartments, setDept] = useState([])
    const [open, setConfirm] = useState(false)

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
            <Card>
            <DepartmentCard key={dept.id} dept={dept} />
            <Button.Group widths='3'>
                    <div>
                    <Button onClick={() => setConfirm(!open)} color="red">Delete</Button>
                    <Confirm open={open} onCancel={() => setConfirm(!open)} onConfirm={() => deleteDept(dept.id)} />
                    </div>
                    <div>
                    <Button onClick={() => console.log("edit")} color="yellow">Edit</Button>
                    </div>
                </Button.Group>
            </Card>
            )}
        </>
    )
}
export default DepartmentList
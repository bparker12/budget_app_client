import React, { useEffect, useState }  from "react"
import { Header } from 'semantic-ui-react'
import DepartmentCard from "./departmentCard"


const DepartmentList = props => {
    const [deptartments, setDept] = useState([])

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

    useEffect(() => {
        getDepartments()}, []
    )

    return (
        <>
        <Header as="h1"> Departments </Header>
            {deptartments.map(dept =>
            <DepartmentCard key={dept.id} dept={dept} />
            )}
        </>
    )
}
export default DepartmentList
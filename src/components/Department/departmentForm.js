import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Header, Label, Card } from 'semantic-ui-react'
import DepartmentCard from './departmentCard'


const DepartmentForm = props => {
    const name = useRef()
    const rate = useRef()
    const quantity = useRef()

    const [department, setDepartment] = useState([])

    const addDepartment = (e) => {
        e.preventDefault();

        const new_dept = {
            name: name.current.value,
            rate: parseFloat(rate.current.value),
            quantity: parseInt(quantity.current.value)
        }
        setDepartment([...department, new_dept])

    }

    const submitAllDepts = (newDept) => {
        if(department !== []){
            return fetch("http://localhost:8000/departments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`
                },
                body: JSON.stringify(newDept)
            })
            .then(() => {
                props.history.push("/")
            })
        } else {
            alert("Please add a Department first")
        }
    }



    return (
        <>
        <Header as="h1"> Add a Department</Header>
        <Form size="large" onSubmit={addDepartment} success={true}>
                <Label size="big" prompt basic >Department Name</Label>
                <input id="name" required defaultValue="" placeholder="Department" ref={name}>
                </input>
                <Label size="big" prompt basic>Number of Employees</Label>
                <input id="quantity" required defaultValue="" placeholder="# of Employees" type="number" ref={quantity}>
                </input>
                <Label size="big" prompt basic>Rate per Hour</Label>
                <input id="rate" required defaultValue="" placeholder="$/hour" type="number" step=".01" ref={rate}>
                </input>
                <Button color="blue" type="Submit">Add Department</Button>
        </Form>

        <Header as="h2">Current Departments Added</Header>
            {department.map(dept =>
                <Card>
                <DepartmentCard dept={dept} />
                </Card>
            )}
        <Button color="blue" onClick={() => submitAllDepts(department)}>Submit All</Button>
        </>
    )
}

export default DepartmentForm
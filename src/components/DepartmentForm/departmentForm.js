import React, { useEffect, useState, useRef } from "react";
import { Form, Input, Button, Header, Card, Label } from 'semantic-ui-react'
import { placeholder } from "@babel/types";


const DepartmentForm = props => {
    const name = useRef()
    const rate = useRef()
    const quantity = useRef()

    const [department, setDepartment] = useState([])
    console.log(department)
    console.log("JSON String", JSON.stringify(department))

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
        return fetch("http://localhost:8000/departments", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`
            },
            body: JSON.stringify(newDept)
        })
        .then()
    }



    return (
        <>
        <Header as="h1"> Add a Department</Header>
        <Form size="large" onSubmit={addDepartment} success={true}>
                <Label size="big" prompt basic >Department Name</Label>
                <input required  placeholder="Department" ref={name}>
                </input>
                <Label size="big" prompt basic>Number of Employees</Label>
                <input required  placeholder="# of Employees" type="number" ref={quantity}>
                </input>
                <Label size="big" prompt basic>Rate per Hour</Label>
                <input required placeholder="$/hour" type="number" step=".01" ref={rate}>
                </input>
                <Button type="Submit">Add Department</Button>
        </Form>

        <Header as="h2">Current Departments Added</Header>
            {department.map(dept =>
                <Card>
                    <Card.Content>
                    <Card.Header>Deptarment: {dept.name}</Card.Header>
                    </Card.Content>
                    <Card.Content>
                    <Card.Description>Number of Employees: {dept.quantity}</Card.Description>
                    <Card.Description>Rate of Pay: ${dept.rate}/hr</Card.Description>
                    </Card.Content>
                </Card>
            )}
        <button onClick={() => submitAllDepts(department)}>Submit All</button>
        </>
    )
}

export default DepartmentForm
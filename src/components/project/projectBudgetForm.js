import React, { useEffect, useState, useRef } from "react";
import { Form, Button, Header, Label } from 'semantic-ui-react'


const ProjectBudgetForm = props => {
    const name = useRef()
    const length = useRef()
    // const quantity = useRef()

    const [department, setDept] = useState([])
    const [project_dept, setProjDept] = useState([])
    // const [id, setId] = useState([])

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

    useEffect(getDepartments, [])
    const addProject = (e) => {
        e.preventDefault();

        const new_proj = {
            name: name.current.value,
            length: parseInt(length.current.value),
            dept: Object.values(project_dept),
            // quantity: parseInt(quantity.current.value)
        }
        submitProject(new_proj)
    }

    const submitProject = (newproj) => {
            return fetch("http://localhost:8000/projectbudgets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`
                },
                body: JSON.stringify(newproj)
            })
            .then(() => {
                props.history.push("/")
            })
        }

    const toggleCheckbox = (dept) => {
        if(document.getElementById(dept.id).checked === true){
                setProjDept([...project_dept, dept])
                // setId([...id, dept.id])

            } else if(document.getElementById(dept.id).checked === false){
                setProjDept(project_dept.filter(dep => dep !== dept))
                // setId(id.filter(Id => Id !== dept.id))
            }

    }



    return (
        <>
            <Header as="h1">Add A Project</Header>
                <Form size="large" onSubmit={addProject}>
                    <Label size="big" prompt basic>Project Name</Label>
                        <input id="name" required defaultValue="" placeholder="Project Name" ref={name}>
                        </input>
                    <Label size="big" prompt basic>Project Length</Label>
                        <input id="length" required defaultValue="" placeholder="Project Length (in months)" type='number' ref={length}
                        />
            <Header as="h2">Choose Departments to Add to the Project</Header>
                    {department.map((dept) =>
                    <div key={dept.id}>
                        <div>
                            <input
                            id={dept.id}
                            type="checkbox"
                            value={dept.id}
                            onClick={() => toggleCheckbox(dept)}/>{dept.name} - {dept.quantity} available
                        </div>
                    </div>
                    )}
                <Button color="blue" type="Submit">Add Project</Button>
                </Form>


        </>
    )
}

export default ProjectBudgetForm


// {id.filter(ID => ID === dept.id) && project_dept.length !== 0 ?
//     <input  type="number" placeholder="# of Employees for Project" ref={quantity} />
// : "" }
// </div>
import React, { useRef, useState, useEffect } from 'react'
import { Form, Label, Button  } from 'semantic-ui-react'


const DepartmentEdit = props => {
    const name = useRef(props.dept.name)
    const quantity = useRef(props.dept.quantity)
    const rate = useRef(props.dept.rate)

    // const [dept, setDept] = useState()

    // const getDepartment = (id) => {
    //     fetch(`http://localhost:8000/departments/${id}`, {
    //         method: "GET",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Accept": "application/json",
    //             "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
    //         }
    //     })
    //     .then(res => res.json())
    //     .then(setDept)
    // }

    // useEffect(() => {getDepartment(props.dept.id)}, [])

    const putUpdate = (id, update_dept) => {
        fetch(`http://localhost:8000/departments/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem("budgetapp_token")}`
          },
          body: JSON.stringify(update_dept)
        })
        .then(() => {
            props.getDept()
            props.setModal(!props.modalOpen)
        })

    }


    const updateDept = (e) => {
        e.preventDefault()
        const update_dept = {
            name: name.current.value,
            quantity: parseFloat(quantity.current.value),
            rate: parseInt(rate.current.value)
        }
        putUpdate(props.dept.id, update_dept)
    }


    return (
        <>
        <Form size="large" success={true}>
                <Label size="big" prompt basic >Department Name</Label>
                <input id="name" required placeholder="Department" defaultValue={props.dept.name} ref={name}>
                </input>
                <Label size="big" prompt basic>Number of Employees</Label>
                <input id="quantity" required placeholder="# of Employees" type="number" defaultValue={props.dept.quantity} ref={quantity}>
                </input>
                <Label size="big" prompt basic>Rate per Hour</Label>
                <input id="rate" required placeholder="$/hour" type="number" step=".01" defaultValue={props.dept.rate} ref={rate}>
                </input>
                <Button color="blue" onClick={updateDept}>Update Department</Button>
                <Button color="grey" onClick={() => props.setModal(!props.modalOpen)}>Cancel</Button>
        </Form>
        </>
    )
}
export default DepartmentEdit
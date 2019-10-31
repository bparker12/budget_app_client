import React, { useRef, useState, useEffect } from 'react'
import { Form, Label, Button  } from 'semantic-ui-react'


const DepartmentEdit = props => {
    const name = useRef(props.dept.name)
    const quantity = useRef(props.dept.quantity)
    const rate = useRef(props.dept.rate)

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


    const updateDept = (id) => {
        const update_dept = {
            name: name.current.value,
            quantity: parseFloat(quantity.current.value),
            rate: parseInt(rate.current.value)
        }
        putUpdate(id, update_dept)
    }


    return (
        <>
        <Form size="large">
            <Label size="big" prompt basic >Department Name</Label>
                <input id="name" required placeholder="Department" defaultValue={props.dept.name} ref={name}>
                </input>
            <Label size="big" prompt basic>Number of Employees</Label>
                <input id="quantity" required placeholder="# of Employees" type="number" defaultValue={props.dept.quantity} ref={quantity}>
                </input>
            <Label size="big" prompt basic>Rate per Hour</Label>
                <input id="rate" required placeholder="$/hour" type="number" step=".01" defaultValue={props.dept.rate} ref={rate}>
                </input>
            <Button color="blue" id={props.dept.id} onClick={() => updateDept(props.dept.id)}>Update Department</Button>
            <Button color="grey" onClick={() => props.setModal(!props.modalOpen)}>Cancel</Button>
        </Form>
        </>
    )
}
export default DepartmentEdit
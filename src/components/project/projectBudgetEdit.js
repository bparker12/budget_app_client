import React, { useRef, useState, useEffect } from 'react'
import { Form, Label, Button  } from 'semantic-ui-react'


const ProjectBudgetEdit = props => {
    const name = useRef()
    const length = useRef()

    const putUpdate = (id, update_projBud) => {
        fetch(`http://localhost:8000/projectbudgets/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${localStorage.getItem("budgetapp_token")}`
          },
          body: JSON.stringify(update_projBud)
        })
        .then(() => {
            props.getProjectDepts()
            props.setModal(!props.modalOpen)
        })

    }


    const updateProjBudget = (id) => {
        const update_proj = {
            name: name.current.value,
            length: parseInt(length.current.value),
        }
        putUpdate(id, update_proj)
    }


    return (
        <>
            <Form size="large" >
                <Label size="big" prompt basic>Project Name</Label>
                    <input id="name" required
                    defaultValue={props.projBudg.name}
                    ref={name}>
                    </input>
                <Label size="big" prompt basic>Project Length</Label>
                    <input id="length" required
                    defaultValue={props.projBudg.length}
                    type='number'
                    ref={length}>
                    </input>
                <Button color="blue" onClick={() => updateProjBudget(props.projBudg.id)}>Update Department</Button>
                <Button color="grey" onClick={() => props.setModal(!props.modalOpen)}>Cancel</Button>
             </Form>
        </>
    )
}
export default ProjectBudgetEdit
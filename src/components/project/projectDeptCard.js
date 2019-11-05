import React, { useState } from 'react'
import { Card, Button, Confirm } from 'semantic-ui-react'


const ProjectDeptCard = props => {

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.projectDept.project_budget.name}</Card.Header>
            <Card.Description textAlign="center"> Project Length: {props.projectDept.project_budget.length} </Card.Description>
                <Card.Content>
                        <div>
                        <Card.Content >
                            <Card.Header as='h3'>Department</Card.Header>
                            <Card.Description> {props.projectDept.department.name} </Card.Description>
                            <Card.Description> # of Employees: {props.projectDept.department.quantity} </Card.Description>
                        </Card.Content>
                        </div>
                </Card.Content>
                <Card.Content>
                    <div>
                        <Card.Description> Esimated Weekly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.weekly_cost)}</Card.Description>
                        <Card.Description> Esimated Monthly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.monthly_cost)}</Card.Description>
                        <Card.Description> Esimated Contract Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.total_cost)}</Card.Description>
                    </div>
                </Card.Content>
                <Card.Content textAlign="center">
                    <Button color="vk" onClick={() => props.deleteConfirm(props.projectDept.id)}>Delete</Button>
                    <Button color="teal" onClick={() => props.editModal(props.projectDept.project_budget)}>Edit</Button>
                </Card.Content>
                <Button color="blue" type="button" onClick={() => props.history.push(`/departmentstatus/${props.projectDept.id}`)}>Status</Button>
        </>
    )
}
export default ProjectDeptCard
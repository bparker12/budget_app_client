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
                            <Card.Header as='h3'>Departments</Card.Header>
                            <Card.Description> {props.projectDept.department.name} </Card.Description>
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
                <Card.Content>
                    <Button onClick={() => props.setConfirm(!props.open)}>Delete</Button>
                    <Confirm open={props.open} onCancel={() => props.setConfirm(!props.open)} onConfirm={() => props.delete(props.projectDept.id)}></Confirm>
                    <Button onClick={() => props.editModal(props.projectDept.project_budget)}>Edit</Button>
                </Card.Content>
        </>
    )
}
export default ProjectDeptCard
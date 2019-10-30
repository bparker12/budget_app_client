import React from 'react'
import { Card, Button, Confirm } from 'semantic-ui-react'


const ProjectDeptCard = props => {

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.projectDept.project_budget.name}</Card.Header>
                <Card.Content>
                        <div>
                        <Card.Content >
                            <Card.Header as='h3'>Departments</Card.Header>
                            <Card.Description> {props.projectDept.department.name} </Card.Description>
                        </Card.Content>
                        </div>
                </Card.Content>
                <Card.Content>
                    <Button onClick={() => props.setConfirm(!props.open)}>Delete</Button>
                    <Confirm open={props.open} onCancel={() => props.setConfirm(!props.open)} onConfirm={() => props.delete(props.projectDept.id)}></Confirm>
                </Card.Content>
        </>
    )
}
export default ProjectDeptCard
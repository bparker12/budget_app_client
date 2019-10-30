import React from "react"
import { Card  } from 'semantic-ui-react'


const DepartmentCard = props => {

    return (
        <>
                <Card.Content>
                    <Card.Header textAlign="center">Department</Card.Header>
                    <Card.Header textAlign="center">{props.dept.name}</Card.Header>
                </Card.Content>
                <Card.Content>
                    <Card.Description>Number of Employees: {props.dept.quantity}</Card.Description>
                    <Card.Description>Rate of Pay: ${props.dept.rate}/hr</Card.Description>
                </Card.Content>
        </>
    )
}
export default DepartmentCard
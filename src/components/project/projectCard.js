import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = props => {

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.project_budget.name}</Card.Header>
            <Card.Description textAlign="center"> Project Length: {props.project_budget.length} </Card.Description>
                <Card.Content>
                    <Card.Header>Estimate Costs</Card.Header>
                    <Card.Description>Weekly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.project_budget.weekly_cost)}</Card.Description>
                    <Card.Description>Monthly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.project_budget.monthly_cost)}</Card.Description>
                    <Card.Description>Total Contract Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.project_budget.total_cost)}</Card.Description>
                </Card.Content>
        </>
    )
}

export default ProjectCard
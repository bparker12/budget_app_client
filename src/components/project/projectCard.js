import React from 'react'
import { Card } from 'semantic-ui-react'

const ProjectCard = props => {

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.project_budget.name}</Card.Header>
            <Card.Description textAlign="center"> Project Length: {props.project_budget.length} </Card.Description>
                {/* <Card.Content>
                </Card.Content> */}
                {/* <Card.Content>
                </Card.Content> */}
        </>
    )
}

export default ProjectCard
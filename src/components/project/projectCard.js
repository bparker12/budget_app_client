import React from 'react'

const ProjectCard = props => {

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.project_budget.name}</Card.Header>
            <Card.Description textAlign="center"> Project Length: {props.project_budget.length} </Card.Description>
                <Card.Content>
                        <div>
                        <Card.Content >
                            <Card.Header as='h3'>Departments</Card.Header>
                            <Card.Description> {props.department.name} </Card.Description>
                        </Card.Content>
                        </div>
                </Card.Content>
                {/* <Card.Content>
                </Card.Content> */}
        </>
    )
}

export default ProjectCard
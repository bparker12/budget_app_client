import React, { useState, useEffect } from 'react'
import { Header, Card, Button, Grid } from 'semantic-ui-react'
import ProjectCard from '../project/projectCard'


const HomePage = props => {

    const [projects, setProjects] = useState([])

    const getProjects = () => {
        fetch(`http://localhost:8000/projectbudgets`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
            }
        })
        .then(res => res.json())
        .then(setProjects)
    }

useEffect(() => {
    getProjects()}, [])


    return (
        <>
        <Header textAlign="center" as='h1'> Budget Breakdown</Header>
            <Header textAlign="center">Current Projects</Header>
                 <Grid centered padded relaxed>
            {projects.map(project =>
                 <div key={project.id}>
                 <Grid.Row style={{'padding': 5}}>

                    <Grid.Column>
                    <Card >
                        <ProjectCard project_budget={project} />
                        <Button primary color="green" onClick={() => props.history.push(`/projectbudgets/${project.id}`)}>Status</Button>
                     </Card>
                    </Grid.Column>
                 </Grid.Row>
                </div>
            )}
                 </Grid>
        </>
    )

}
export default HomePage
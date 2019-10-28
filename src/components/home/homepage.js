import React, { useEffect, useState, useRef } from "react";
import { Card } from 'semantic-ui-react'


const homePage = props => {
    const [project, setProject] = useState9([])


    const getProjects = () => {
        fetch("http://localhost:8000/projectbudgets", {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${localStorage.getItem("bangazon_token")}`
            }
        })
        .then(res => res.json())
        .then(setProject)
    }

    useEffect(() => {
        getProjects(), []
    })


    return (
    <>
        <Card key={project.id}>
            <Card.Content>
                <Card.Header>Project {project.name}</Card.Header>
            </Card.Content>
        </Card>
    </>
    )
}
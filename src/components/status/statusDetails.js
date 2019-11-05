import React, { useState, useEffect, useRef } from 'react'
import { Header, Card, Label, Button } from 'semantic-ui-react'



const StatusDetails = props => {

    const [projectDetails, setProjectDetail] = useState([])

    const getProjectBudget =()=> {
        fetch(`http://localhost:8000/projectdepartments?project_budget=${+props.match.params.projectbudgetId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
          }
        })
          .then(res => res.json())
          .then(setProjectDetail)
    }

    useEffect(getProjectBudget, [])

    return (
      <>
          <Header> Status </Header>
          {projectDetails.map(projectDetail =>
          <div key={projectDetail.id}>
          <Card>
            <Card.Header as='h3' textAlign='center'> {projectDetail.department.name} </Card.Header>
            <Card.Content>
              <Card.Description>
                Months Remaining: {projectDetail.project_length_remaining}
              </Card.Description>
            </Card.Content>
            <Card.Content>
                <Button type="button" fluid onClick={() => props.history.push(`/departmentstatus/${projectDetail.id}`)}>Status Department</Button>
            </Card.Content>
          </Card>
          </div>
          )
          }
        </>
    )

}
export default StatusDetails
import React, { useState, useEffect, useRef } from 'react'
import { Header, Card, Label, Button } from 'semantic-ui-react'



const StatusDetails = props => {
    const total_hours = useRef()

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
          <div>

          <Card>
            <Card.Header   textAlign='center'> {projectDetail.department.name} </Card.Header>
            <Card.Content>
            <form>
              <Card.Description textAlign="center">
                Project Length:   {projectDetail.project_budget.length}
              </Card.Description>
                <Label size="big" prompt basic>Total Hours Worked for Month # </Label>
                <input type="text" ref={total_hours}></input>
                <Button>Submit</Button>
            </form>
            </Card.Content>
          </Card>
          </div>
          )
          }
        </>
    )

}
export default StatusDetails
import React, { useState, useEffect, useRef } from 'react'
import { Header, Card, Label, Button, Form } from 'semantic-ui-react'



const StatusProjectDept = props => {
    const total_hours = useRef()

    const [projectDetails, setProjectDetails] = useState([])
    // const [currentDeptHours, setCurrentDeptHours] = useState([])

    // fetches the specific projectbudget that needs to be statused
    const getProjectBudget =()=> {
        fetch(`http://localhost:8000/projectdepartments?project_department=${+props.match.params.projectdepartmentId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`,
          }
        })
          .then(res => res.json())
          .then(res => {
              setProjectDetails(res)
            })
    }


    // this function handles the event listener to add a new Department Hour (or status).  It has to bring in the id for the projectDepartment to post the id of the new department hour and also the project_budget to push back to the other departments that might need updating
    const addDeptHour = (e, id, project_budget_id, dept_hour) => {
      e.preventDefault();

        const dept_hour_configure = (dept_hour_check) => {
            if(dept_hour_check === null){
                return null
            } else {
                return dept_hour_check.id
            }
        }

      const newDeptHour = {
        hours: parseInt(total_hours.current.value),
        projectDepartmentId: id,
        department_hour_id: dept_hour_configure(dept_hour)
      }
      postDeptHour(newDeptHour, project_budget_id)
    }

    const postDeptHour = (newDeptHour, id) => {
      return fetch("http://localhost:8000/departmenthours", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Token ${localStorage.getItem("budgetapp_token")}`
        },
        body: JSON.stringify(newDeptHour)
    })
    .then(() => {
        props.history.push(`/projectbudgets/${id}`)
    })
}

    const handleHoursWorked = (hours_worked) => {
        if(hours_worked === null){
            return 0
        } else {
            return hours_worked.hours_worked
        }
    }

    useEffect(getProjectBudget, [])

    return (
      <>
          <Header> Status </Header>
        {projectDetails.map(projectDetail =>
          <Card key={projectDetail.id}>
            <Card.Header as='h3'  textAlign='center'> {projectDetail.department.name} </Card.Header>
            <Form>
              <Card.Description textAlign="center">
                Project Length:   {projectDetail.project_budget.length}
              </Card.Description>
              <Card.Description  textAlign="center">
                Remaining Months: {projectDetail.project_length_remaining}
              </Card.Description>
              <Card.Content>
                <Label size="large" prompt basic>Total Hours Worked to Date </Label>
                <input type="number" step={1} ref={total_hours} defaultValue={handleHoursWorked(projectDetail.department_hour)} min={handleHoursWorked(projectDetail.department_hour)}></input>
                <Button type="button" color="blue"
                onClick={(e) => addDeptHour(e, projectDetail.id, projectDetail.project_budget.id, projectDetail.department_hour)}>Submit</Button>
              </Card.Content>
            </Form>
          </Card>
        )}

        </>
    )

}
export default StatusProjectDept
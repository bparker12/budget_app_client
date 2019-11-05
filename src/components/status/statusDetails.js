import React, { useState, useEffect, useRef } from 'react'
import { Header, Card, Label, Button, Confirm, Modal, Grid } from 'semantic-ui-react'
import ProjectDeptCard from '../project/projectDeptCard'
import ProjectBudgetEdit from '../project/projectBudgetEdit'



const StatusDetails = props => {

    const [projectDetails, setProjectDetail] = useState([])
    const [open, setConfirm] = useState(false)
    const [modalOpen, setModal] = useState(false)
    const [projId, setProj] = useState({})
    const [id, setId] = useState()

    const editModal = (proj) => {
        setProj(proj)
        setModal(!modalOpen)
    }

    const deleteConfirm = (id) => {
        setId(id)
        setConfirm(!open)
    }

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

    const deleteProjectDept = (id) => {
      fetch(`http://localhost:8000/projectdepartments/${id}`, {
          method: "DELETE",
          headers: {
              Authorization: `Token ${localStorage.getItem("budgetapp_token")}`
          }
      })
      .then(() => {
          getProjectBudget()
          setConfirm(!open)
      })
  }

    return (
      <>
          <Header> Status </Header>
          <Grid>
          {projectDetails.map(projectDetail =>
          <div key={projectDetail.id}>
          <Grid.Column>
          <Card>
              <ProjectDeptCard
              {...props}
              projectDept={projectDetail}
              open={open}
              setConfirm={setConfirm}
              editModal={editModal}
              deleteConfirm={deleteConfirm}
              />
          </Card>
          </Grid.Column>
          </div>
          )}
          </Grid>
          <Confirm open={open} onCancel={() => setConfirm(!open)} onConfirm={() => deleteProjectDept(id)}></Confirm>
        <Modal
            size="small"
            open={modalOpen}
            onCancel={() => setModal(!open)}
            >
            <Modal.Content>
                <ProjectBudgetEdit

                projBudg={projId}
                setModal={setModal}
                modalOpen={modalOpen}
                getProjectDepts={getProjectBudget}
                />
            </Modal.Content>
        </Modal>
        </>
    )

}
export default StatusDetails
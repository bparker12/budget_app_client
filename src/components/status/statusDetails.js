import React, { useState, useEffect } from 'react'


const StatusDetails = props => {

    const [projectDetail, setProjectDetail] = useState([])

    const getProjectBudget =()=> {
        fetch(`http://localhost:8000/projectbudgets/${+props.match.params.projectbudgetId}`, {
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
                {projectDetail.name}
            

        </>
    )

}
export default StatusDetails
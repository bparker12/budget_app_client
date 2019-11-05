import React  from 'react'
import { Card, Button,Table } from 'semantic-ui-react'


const ProjectDeptCard = props => {

    const months_left = props.projectDept.project_budget.length - props.projectDept.project_length_remaining

    return (
        <>
            <Card.Header as="h2" textAlign="center">Project
            <br></br>
            {props.projectDept.project_budget.name}</Card.Header>
            <Card.Description textAlign="center"> Project Length: {props.projectDept.project_budget.length} </Card.Description>
            <Card.Description textAlign="center"> Months Statused: {months_left} </Card.Description>
                <Card.Content>
                        <div>
                        <Card.Content >
                            <Card.Header as='h3'>Department</Card.Header>
                            <Card.Description> {props.projectDept.department.name} </Card.Description>
                            <Card.Description> # of Employees: {props.projectDept.department.quantity} </Card.Description>
                        </Card.Content>
                        </div>
                </Card.Content>
                <Card.Content>
                    <div>
                    <Table celled collapsing>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>  </Table.HeaderCell>
                                <Table.HeaderCell> Estimates </Table.HeaderCell>
                                <Table.HeaderCell> Actual </Table.HeaderCell>
                                <Table.HeaderCell> Difference</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {/* <Table.Row>
                                <Table.Cell>Weekly</Table.Cell>
                                <Table.Cell>${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.weekly_cost)}</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row> */}
                            <Table.Row>
                                <Table.Cell>Monthly</Table.Cell>
                                <Table.Cell>${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.monthly_cost)}</Table.Cell>
                                <Table.Cell>${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.actual_monthly_cost)}</Table.Cell>
                                <Table.Cell>${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.monthly_dif)}</Table.Cell>

                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Project</Table.Cell>
                                <Table.Cell>${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.total_cost)}</Table.Cell>
                                <Table.Cell></Table.Cell>
                                <Table.Cell></Table.Cell>
                            </Table.Row>
                        </Table.Body>

                        {/* <Card.Description> Esimated Weekly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.weekly_cost)}</Card.Description>
                        <Card.Description> Esimated Monthly Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.monthly_cost)}</Card.Description>
                        <Card.Description> Esimated Project Cost: ${new Intl.NumberFormat({ style: 'currency', currency: 'USD' }).format(props.projectDept.total_cost)}</Card.Description> */}
                    </Table>
                    </div>
                </Card.Content>
                <Card.Content textAlign="center">
                    <Button color="teal" onClick={() => props.editModal(props.projectDept.project_budget)}>Edit</Button>
                    <Button color="vk" onClick={() => props.deleteConfirm(props.projectDept.id)}>Delete</Button>
                </Card.Content>
                <Button color="blue" type="button" onClick={() => props.history.push(`/departmentstatus/${props.projectDept.id}`)}>Status</Button>
        </>
    )
}
export default ProjectDeptCard
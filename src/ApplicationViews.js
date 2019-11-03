import { Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import HomePage from './components/home/homepage'
import Register from './components/auth/register'
import Login from './components/auth/login'
import DepartmentForm from './components/department/departmentForm'
import DepartmentList from './components/department/departmentList'
import ProjectBudgetForm from './components/project/projectBudgetForm'
import DepartmentHour from './components/status/dpartmentHour'


const ApplicationViews = () => {

    return (
        <React.Fragment>
            <Route
                exact path="/" render={props => {
                    return <HomePage {...props} />
                }}
            />
            <Route
                path="/register" render={props => {
                    return <Register {...props} />
                }}
            />
            <Route
                path="/login" render={props => {
                    return <Login {...props} />
                }}
            />
            <Route
                path="/departmentform" render={props => {
                    return <DepartmentForm {...props} />
                }}
            />
            <Route
                path="/departments" render={props => {
                    return <DepartmentList {...props} />
                }}
            />
            <Route
                path="/projectform" render={props => {
                    return <ProjectBudgetForm {...props} />
                }}
            />
            <Route
                path="/status" render={props => {
                    return <DepartmentHour {...props} />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)

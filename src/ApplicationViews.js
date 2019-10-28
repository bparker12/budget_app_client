import { Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import HomePage from './components/home/homepage'
import Register from './components/auth/register'
import Login from './components/auth/login'
import DepartmentForm from './components/DepartmentForm/departmentForm'


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
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)

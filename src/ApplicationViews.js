import { Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom"
import register from './components/auth/register'
import login from './components/auth/login'


const ApplicationViews = () => {

    return (
        <React.Fragment>
            <Route
                exact path="/" render={props => {
                    return <homePage {...props} />
                }}
            />
            <Route
                path="/register" render={props => {
                    return <register {...props} />
                }}
            />

            <Route
                path="/login" render={props => {
                    return <login {...props} />
                }}
            />
        </React.Fragment>
    )
}

export default withRouter(ApplicationViews)

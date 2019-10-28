import React from "react"
import { Route } from "react-router-dom"
import NavBar from './components/navbar/navBar'
import ApplicationViews from './ApplicationViews'
// import Register from './components/auth/register'
// import Login from './components/auth/login'
// import isAuthenticated from './hooks/ui/useSimpleAuth'

const BudgetApp = () => {
    // const { isAuthenticated } = useSimpleAuth()

    return (
        // isAuthenticated() ?
        <React.Fragment>
            <Route render={props => (
                <NavBar {...props} />
            )}
            />
            <ApplicationViews />
        </React.Fragment>
        // :
        // <React.Fragment>
        //     <Route
        //         path="/register" render={props => {
        //             return <Register {...props} />
        //         }}
        //     />
        //     <Route
        //         path="/login" render={props => {
        //             return <Login {...props} />
        //         }}
        //     />
        // </React.Fragment>
    )
}

export default BudgetApp

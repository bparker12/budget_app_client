import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()

    const logoutAction = () => {
        logout()
        props.history.push("/login")
    }

    return (
        <nav>
            <Menu>
                <Menu.Item>
                    <Link to="/"> Home </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/departmentform"> Add a Department </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/departments"> Departments </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/projectform"> Add a Project </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/status"> Status a Project </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login"> Login </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/register"> Register </Link>
                </Menu.Item>
                <Menu.Item position="right" onClick={logoutAction}>
                    Logout
                </Menu.Item>
            </Menu>
        </nav>
    )
}
export default NavBar

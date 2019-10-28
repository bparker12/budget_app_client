import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()

    return (
        <nav>
            <Menu>
                <Menu.Item>
                    <Link to="/"> Home </Link>
                </Menu.Item>
            </Menu>
        </nav>
    )
}
export default NavBar
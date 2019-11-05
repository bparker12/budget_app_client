import React from "react"
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'
import useSimpleAuth from "../../hooks/ui/useSimpleAuth"
import { mixedTypeAnnotation } from "@babel/types"

const NavBar = props => {
    const { isAuthenticated, logout } = useSimpleAuth()

    const logoutAction = () => {
        logout()
        props.history.push("/login")
    }

    return (
        <nav>
            <Menu>
                {isAuthenticated() ?
                <Menu.Item>
                    <Link to="/"> Home </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() ?
                <Menu.Item>
                    <Link to="/departmentform"> Add a Department </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() ?
                <Menu.Item>
                    <Link to="/departments"> Departments </Link>
                </Menu.Item> : null
                }

                {isAuthenticated() ?
                <Menu.Item>
                    <Link to="/projectform"> Add a Project </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() ?
                <Menu.Item>
                    <Link to="/status"> Project/Department Breakdwon </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() === false ?
                <Menu.Item>
                    <Link to="/login"> Login </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() === false ?
                <Menu.Item>
                    <Link to="/register"> Register </Link>
                </Menu.Item> : null
                }
                {isAuthenticated() ?
                <Menu.Item position="right" onClick={logoutAction}>
                    Logout
                </Menu.Item> : null
                }
            </Menu>
        </nav>
    )
}
export default NavBar

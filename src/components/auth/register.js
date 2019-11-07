import React, { useRef } from "react"
import { withRouter } from "react-router-dom"
import useSimpleAuth from '../../hooks/ui/useSimpleAuth'
import { Form, Grid, Button } from 'semantic-ui-react'


const Register = props => {
    const userName = useRef()
    const lastName = useRef()
    const password = useRef()
    const firstName = useRef()
    const company = useRef()
    const verifyPassword = useRef()
    const { register } = useSimpleAuth()

    const handleRegister = (e) => {
        e.preventDefault()

        const newUser = {
            "username": userName.current.value,
            "first_name": firstName.current.value,
            "last_name": lastName.current.value,
            "company": company.current.value,
            "password": password.current.value
        }
        // password == verifyPassword ?
        register(newUser).then(() => {
            props.history.push({
                pathname: "/"
            })
        })
        // : alert("Password did not match")
    }

    return (
        <main style={{ textAlign: "center" }}>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
            <Grid.Column style={{ "maxWidth": 450, 'border': "4 solid black" }}>
            <Form className="form--login" onSubmit={handleRegister} style={{ border: 1 }}>
                <h1 className="h3 mb-3 font-weight-normal">Register to use Bangazon</h1>
                <Form.Field>
                    <label htmlFor="userName"> Username </label>
                    <input ref={userName} type="text"
                        name="userName"
                        className="form-control"
                        placeholder="Username"
                        required autoFocus />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        required autoFocus />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Last name"
                        required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="inputEmail"> Company Name </label>
                    <input ref={company} type="text"
                        name="company"
                        className="form-control"
                        placeholder="Company Name"
                        required />
                </Form.Field>
                <Form.Field>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required />
                </Form.Field>
                {/* <Form.Field>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password"
                        name="verifyPassword"
                        className="form-control"
                        placeholder="Verify password"
                        required />
                </Form.Field> */}
                <Form.Field>
                    <Button type="submit">
                        Sign in
                    </Button>
                </Form.Field>
            </Form>
            </Grid.Column>
            </Grid>
        </main>
    )
}
export default withRouter(Register)
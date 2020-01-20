import React, { useRef } from "react"
import { Link } from "react-router-dom"
import useSimpleAuth from "../../hooks/ui/useSimpleAuth";
import { Form, Label, Grid, Button, Segment } from 'semantic-ui-react'


const Login = props => {
    const username = useRef()
    const password = useRef()
    const { login } = useSimpleAuth()

    // Simplistic handler for login submit
    const handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the username and password that
            the customer enters into local storage.
        */
        const credentials = {
            "username": username.current.value,
            "password": password.current.value
        }

        login(credentials)
            .then(() => {
                props.history.push({
                    pathname: "/"
                })
            })
    }

    return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }} >
                    <Form size="Large" onSubmit={handleLogin}>
                    <Segment stacked>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign into Budget Breakdown</h1>
                        <Form.Field>
                            <Label size='huge' htmlFor="username"> Username </Label>
                            <input ref={username} type="text"
                                id="username"
                                placeholder="Username"
                                required autoFocus />
                            {/* <Label size="large" htmlFor="username"> User Name </Label>
                    <input ref={username} type="username"
                        placeholder="User Name"
                        required autoFocus /> */}
                        </Form.Field>
                        <Form.Field>
                            <Label size='huge' htmlFor="inputPassword"> Password </Label>
                            <input ref={password} type="password"
                                id="password"
                                placeholder="Password"
                                required />
                        </Form.Field>
                        <Form.Field>
                            <Button type="submit">
                                Sign in
                    </Button>
                        </Form.Field>
                        <p>Not Registered? <Link to="/register"> Register Here</Link></p>
                        </Segment>
                    </Form>
                </Grid.Column>
            </Grid>
    )
}
export default Login
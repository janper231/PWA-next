import { Component } from 'react'
import Router, { Redirect } from 'next/router'
import Layout from '../components/layout'
import { SnackbarProvider } from 'notistack';

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            load: true
        }
    }
    componentDidMount() {
        this.setState({ Token: localStorage.getItem("Token") })
        if (localStorage.getItem("Token") === null) {
            Router.replace("/login")
        } else {
            Router.push("/")
        }
    }
    render() {
        const { children, props } = this.props;
        console.log(this.props)
        if (this.state.Token === null && props.router.pathname === "/login") {
            return (
                <SnackbarProvider maxSnack={5}>
                    {children}
                </SnackbarProvider>
            )
        } else if (this.state.Token !== null && props.router.pathname !== "/login") {
            return (
                <SnackbarProvider maxSnack={5}>
                    <Layout>
                        {children}
                    </Layout>
                </SnackbarProvider>

            )
        } else {
            return "Loading..."
        }
    }
}
export default Auth
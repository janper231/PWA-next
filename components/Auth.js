import { Component } from 'react'
import Router from 'next/router'
import Layout from '../components/layout'
import { SnackbarProvider } from 'notistack';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            load: true
        }
    }
    componentDidMount() {
        if (cookies.get('Token') === undefined) {
            Router.replace("/login")
        } else {
            Router.push("/")
        }
    }
    componentWillUpdate() {
        if (cookies.get('Token') === undefined && this.props.props.router.pathname !== "/login") {
            Router.push("/login")
        }
    }
    render() {
        const { children, props } = this.props;
        if (cookies.get('Token') === undefined && props.router.pathname === "/login") {
            return (
                <SnackbarProvider maxSnack={2}>
                    {children}
                </SnackbarProvider>
            )
        } else if (cookies.get('Token') !== undefined && props.router.pathname !== "/login") {
            return (
                <SnackbarProvider maxSnack={3}>
                    <Layout>
                        {children}
                    </Layout>
                </SnackbarProvider>
            )
        } else {
            return (
                <h2>Loading....</h2>
            )
        }
    }
}
export default Auth
import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import axios from 'axios';
import Router, { Redirect } from 'next/router'
//components
import Layout from '../components/layout'

axios.defaults.baseURL = 'https://desarrollo.syseu.com/KumbiaPHP';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

export default class MyApp extends App {
  state = {
    token: null,
    load: false,
  }
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }

  componentDidMount() {
    this.setState({ token: localStorage.getItem("Token") });
    if (localStorage.getItem("Token") === null) {
      Router.replace("/login")
    } else {
      Router.replace("/")
    }
  }

  render() {
    const { Component, pageProps, router } = this.props
    if (this.state.token !== null && router.pathname === "/login") {
      Router.replace("/")
    }
    if (this.state.token === null && router.pathname === "/login") {
      return (
        <Container>
          <Head>
            <title>Test</title>
          </Head>
          <Component {...pageProps} />
        </Container>
      )
    } else if (this.state.token !== null) {
      return (
        <Container>
          <Head>
            <title>Test</title>
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      )
    } else {
      return "Loadin....."
    }
  }
}

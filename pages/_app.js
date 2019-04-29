import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import axios from 'axios';
import Router from 'next/router'
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
    this.setState({ token: localStorage.getItem("Token"), load: true });
    if (this.state.token==null) {
      Router.push("/login")
    }else{
      Router.push("/")
    }
  }
  render() {
    const { Component, pageProps } = this.props
    console.log(this.state.token)
    if (this.state.token === null) {
      if (!this.state.load) {
        return (
          <Container>
            <Head>
              <title>Test</title>
            </Head>
            loadin.....
          </Container>
        )
      } else {
        return (
          <Container>
            <Head>
              <title>Test</title>
            </Head>
            <Component {...pageProps} />
          </Container>
        )
      }
    } else {
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
    }
  }
}

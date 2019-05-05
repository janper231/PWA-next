import App, { Container } from 'next/app'
import Head from 'next/head'
import React from 'react'
import axios from 'axios'
//components
import Auth from '../components/Auth'
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

  render() {
    const { Component, pageProps, router } = this.props
    return (
      <Container>
        <Head>
          <title>Test</title>
        </Head>
        <Auth props={this.props}>
         <Component {...pageProps} />
        </Auth>
      </Container>
    )
  }
}

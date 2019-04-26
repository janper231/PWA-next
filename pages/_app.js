import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
//components
import Layout from '../components/layout'
export default class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  render () {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Head>
          <title>Test</title>
        </Head>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </Container>
    )
  }
}

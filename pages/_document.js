import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html>
            <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            <link rel="shortcut icon" href="/static/favicon.png" />
            <link rel="manifest" href="/static/manifest.json" />
            <link rel="shortcut icon" href="/static/favicon.png" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <meta name="theme-color" content="blue" />
            </Head>
            <Main />
            <NextScript />
            </Html>
        );
    }
}

export default MyDocument;

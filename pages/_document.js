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
                    <link rel="apple-touch-icon" href="/static/favicon.png" />
                    <meta name="apple-mobile-web-app-title" content="Test app" />
                    <meta name="apple-mobile-web-app-capable" content="no" />
                    <meta
                        name="apple-mobile-web-app-status-bar-style"
                        content="black-translucent"
                    />
                    <link rel="manifest" href="/static/manifest.json" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <meta name="theme-color" content="black" />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}

export default MyDocument;

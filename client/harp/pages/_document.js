import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang='en'>
                <Head>
                    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1"></meta>
                    <meta name="description" content="This is a social media site"></meta>
                    <meta name="google" content="notranslate" />
                    {/* <link rel="canonical" href="https://mylink" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
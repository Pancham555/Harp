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
                    <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0,target-densitydpi=device-dpi, user-scalable=no" />
                    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2026631357019919"
                        crossorigin="anonymous"></script>
                    <script async custom-element="amp-auto-ads"
                        src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js">
                    </script>
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
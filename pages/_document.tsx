import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* // TODO: Improve my meta description content (e.g. maybe match whatever I come up with for my Hero section) */}
          <meta
            name="description"
            content="Gary Xie is a software developer specializing in building extraordinary experiences for the web."
          />
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

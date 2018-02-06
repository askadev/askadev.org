import Document, { Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          {process.env.NODE_ENV === "production" ? (
            <link rel="stylesheet" href="/_next/static/style.css" />
          ) : (
            ""
          )}
        </Head>
        <body className="index" data-force-encoding="✓">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

import Head from "next/head"

export default () => (
  <Head>
    {/* <!--A site developed by Tim Shedor--> */}
    <meta charSet="utf-8" />
    <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
    <meta content="IE=edgechrome=1" httpEquiv="X-UA-Compatible" />
    <meta
      content="width=device-width, initial-scale=1.0, maximum-scale=10.0, user-scalable=1"
      name="viewport"
    />
    <meta content="Ask a Dev" name="description" />
    <meta content="Ask a Dev" property="og:site_name" />
    <meta content="website" property="og:type" />
    <meta content="en_US" property="og:locale" />
    <meta content="image/jpeg" property="og:image:type" />
    <meta content="1200" property="og:image:width" />
    <meta content="630" property="og:image:height" />
    <meta content="https://askadev.org/images/og.jpg" property="og:image" />
    <link
      href="static/favicons/apple-touch-icon.png"
      rel="apple-touch-icon"
      sizes="180x180"
    />
    <link
      href="static/favicons/favicon-32x32.png"
      rel="icon"
      sizes="32x32"
      type="image/png"
    />
    <link
      href="static/favicons/favicon-16x16.png"
      rel="icon"
      sizes="16x16"
      type="image/png"
    />
    <link href="static/favicons/site.webmanifest" rel="manifest" />
    <link
      color="#5bbad5"
      href="images/favicons/safari-pinned-tab.svg"
      rel="mask-icon"
    />
    <meta content="#ffc40d" name="msapplication-TileColor" />
    <meta content="#ffffff" name="theme-color" />
    {/* <!--Hi, mom--> */}
    <title>Ask a Dev</title>
    <script
      async=""
      src="https://www.googletagmanager.com/gtag/js?id=UA-113487796-1"
    />
    {/* TODO: ADD G Analytics */}
  </Head>
)

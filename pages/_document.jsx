import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta name='description' content='' />
          <meta name='image' content='/assets/logo.png' />
          <meta property='og:title' content='Medway' />
          <meta property='og:description' content='' />
          <meta property='og:image' content='/assets/logo.png' />
          <meta name='twitter:creator' content='' />
          <meta name='twitter:title' content='Medway' />
          <meta name='twitter:description' content='' />
          <meta name='twitter:image' content='/assets/logo.png' />

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/site.webmanifest' />
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

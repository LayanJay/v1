import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='description'
            content='Layan Jayasinghe is a frontend developer who specializes in building (and occasionally designing) exceptional digital experiences.'
          />
          <meta name='image' content='/brand_assets/logo.png' />
          <meta property='og:title' content='Layan Jayasinghe' />
          <meta
            property='og:description'
            content='Layan Jayasinghe is a frontend developer who specializes in building (and occasionally designing) exceptional digital experiences.'
          />
          <meta property='og:image' content='/brand_assets/logo.png' />
          <meta name='twitter:creator' content='__x__LEO__x__' />
          <meta name='twitter:title' content='Layan Jayasinghe' />
          <meta
            name='twitter:description'
            content='Layan Jayasinghe is a frontend developer who specializes in building (and occasionally designing) exceptional digital experiences.'
          />
          <meta name='twitter:image' content='/brand_assets/logo.png' />

          <link rel='icon' type='image/svg+xml' href='/favicon/favicon.svg' />

          <link rel='icon' type='image/png' href='/favicon/favicon.png' />
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

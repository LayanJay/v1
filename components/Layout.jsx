import Head from 'next/head'

const Layout = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className='min-h-screen bg-primary-dark font-inter text-white-base'>
        {children}
      </main>
    </>
  )
}

export default Layout

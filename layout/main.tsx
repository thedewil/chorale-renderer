import React from 'react'
import Head from 'next/head'

const Layout: React.FC = (props) => {
  return <>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;1,400;1,600&family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
    </Head>
    {props.children}
  </>
}

export default Layout
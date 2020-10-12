import Head from 'next/head'
import { motion } from 'framer-motion'
import React from 'react'
import SiteHeader from '../components/SiteHeader'
import styled from '../styled'

type Props = {
  title?: string
}

const Layout: React.FunctionComponent<Props> = ({ children, title = null }) => (
  <motion.div exit={{ transition: { when: "afterChildren" }}}>
    <Head>
      <title>{title ? `${title}` : `Framer Motion`}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <SiteHeader />
    <Main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >{children}</Main>
  </motion.div>
)

const Main = styled(motion.main)`
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  padding-bottom: 30px;
  padding-top: 120px;
`

export default Layout

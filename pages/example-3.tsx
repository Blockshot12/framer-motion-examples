import { useState } from 'react'
import Layout from '../layouts/default'
import SideNav from '../components/SideNav'
import styled from '../styled'

const ExampleThree = () => {
  const [showSideNav, setShowSideNav] = useState(false)

  const handleShowSideNav = () => {
    setShowSideNav(true)
  }

  const handleHideSideNav = () => {
    setShowSideNav(false)
  }

  return (
    <Layout title="Sidenav">
      <h1>Sidenav</h1>
      <Subtitle>Voorbeeld 3</Subtitle>
      <button onClick={handleShowSideNav}>Show sidenav</button>
      <SideNav handleHide={handleHideSideNav} showSideNav={showSideNav} fullPage={false} />
    </Layout>
  )
}

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 50px;
`

export default ExampleThree

import { useState } from 'react'
import Layout from '../layouts/transition'
import SideNav from '../components/SideNav'
import styled from '../styled'

const ExampleFour = () => {
  const [showSideNav, setShowSideNav] = useState(false)

  const handleShowSideNav = () => {
    setShowSideNav(true)
  }

  const handleHideSideNav = () => {
    setShowSideNav(false)
  }

  return (
    <Layout title="Page Transition">
      <h1>Page Transition</h1>
      <Subtitle>Voorbeeld 4</Subtitle>
      <button onClick={handleShowSideNav}>Show sidenav</button>
      <SideNav handleHide={handleHideSideNav} showSideNav={showSideNav} fullPage={false} />
    </Layout>
  )
}

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 50px;
`

export default ExampleFour

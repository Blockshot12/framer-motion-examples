import React, { useState } from 'react'
import ToggleButton from './ToggleButton'
import SideNav from '../../SideNav'

const HamburgerButton = () => {
    const [showSideNav, setShowSideNav] = useState(false)

  const handleShowSideNav = () => {
    setShowSideNav(true)
  }

  const handleHideSideNav = () => {
    setShowSideNav(false)
  }
  return (
    <>
      <ToggleButton onClick={handleShowSideNav} isOpen={showSideNav} />
      <SideNav handleHide={handleHideSideNav} showSideNav={showSideNav} fullPage={true} />
    </>
  )
}

export default HamburgerButton

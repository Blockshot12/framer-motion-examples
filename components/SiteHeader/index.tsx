import Link from 'next/link'
import { motion, useViewportScroll } from 'framer-motion'
import { useState } from 'react'
import HamburgerButton from './HamburgerButton'
import LabLogo from './LabLogo'
import LangSelector from './LangSelector'
import styled, { mqMin } from '../../styled'

type HeaderProps = {
  compact?: boolean
  hidden?: boolean
}

const SiteHeader = () => {
  const [isCompact, setIsCompact] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const { scrollY } = useViewportScroll()

  scrollY.onChange(() => {
    const y = scrollY.get()
    const ySpeed = scrollY.getVelocity()

    setIsCompact(y > 50)
    if (ySpeed >= 800 || ySpeed <= -300) {
      setIsHidden(ySpeed > 0 && y > 200)
    }
  })

  return (
    <Header compact={isCompact} hidden={isHidden}>
      <HamburgerButton />
      <Link href="/">
        <Logo>
          <LabLogo init={false} />
        </Logo>
      </Link>
      <LangSelector />
    </Header>
  )
}

const Header = styled(motion.header)<HeaderProps>`
  align-items: center;
  background-color: ${(props) =>
  props.compact ? ({ theme }) => theme.colors.green : 'transparent'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, ${(props) =>
  props.compact ? 0.4 : 0});
  display: flex;
  flex-direction: row-reverse;
  height: 65px;
  justify-content: space-between;
  left: 0;
  padding: 5px 15px;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${(props) => (props.hidden ? `translateY(-100%)` : `translateY(0)`)};
  transition: background-color 200ms ease, transform 300ms ease;
  width: 100%;
  z-index: 1020;

  @media (${mqMin('sm')}) {
    flex-direction: row;
    height: 80px;
    padding: 10px 20px;
  }
`

const Logo = styled.a`
  cursor: pointer;
  height: 30px;
  margin-top: 4px;
  z-index: 1040;

  @media (${mqMin('sm')}) {
    height: 35px;
  }
`

export default SiteHeader

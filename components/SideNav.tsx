import Link from 'next/link'
import { motion } from 'framer-motion'
import { useModal } from 'react-modal-hook'
import React, { useEffect } from 'react'
import styled from '../styled'

const navigationData = [
  { title: 'Basics', url: '/' },
  { title: 'Animate Presence', url: '/example-1' },
  { title: 'Modal', url: '/example-2' },
  { title: 'Side Nav', url: '/example-3' },
  { title: 'Page transition', url: '/example-4' },
  { title: 'Scroll Animation', url: '/example-5' },
  { title: 'Flexbox Properties', url: '/example-6' },
]

type Props = {
  handleHide: () => void
  fullPage: boolean
  showSideNav: boolean
}

const ContainerVariants = {
  close: {
    x: '-100%',
    transition: {
      restSpeed: 0.3,
      when: 'afterChildren',
    },
  },
  open: {
    x: 0,
    transition: {
      restSpeed: 0.3,
      when: 'beforeChildren',
    }
  },
}

const MenuVariants = {
  close: {
    transition: {
      // delayChildren: 0,
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren"
    },
  },
  open: {
    transition: {
      // delayChildren: 1,
      staggerChildren: 0.2,
      staggerDirection: 1,
      when: "beforeChildren",
    },
  },
}

const MenuItemVariants = {
  close: {
    // y: 50,
    opacity: 0,
    transition: { stiffness: 1000 },
  },
  open: {
    // y: 0,
    opacity: 1,
    transition: { stiffness: 1000, velocity: -100 },
  },
}

const SideNav: React.FunctionComponent<Props> = ({ handleHide, fullPage = false, showSideNav }) => {
  const [show, hide] = useModal(() => (
    <Container
      initial="close"
      animate="open"
      exit="close"
      variants={ContainerVariants}
      style={{ width: fullPage ? '100%' : 400 }}
    >
      <CloseButton onClick={handleHide}>X</CloseButton>
      <Menu initial="close" animate="open" exit="close" variants={MenuVariants}>
        {navigationData.map((item) => (
          <MenuItem
            initial="close"
            animate="open"
            exit="close"
            variants={MenuItemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={item.title}
          >
            <Link href={item.url}>
              <a>
                {item.title}
              </a>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </Container>
  ), [])

  useEffect(() => {
    if (showSideNav) {
      show()
    } else {
      hide()
    }
  }, [showSideNav])

  return null
}

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 0;
  color: white;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  line-height: 28px;
  padding: 10px;
  position: absolute;
  top: 14px;
  left: 40px;
  transform: scaleY(70%);

  &:hover {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.green};
  }
`

const Container = styled(motion.div)`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray700};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  pointer-events: all;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1080;
`

const Menu = styled(motion.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
`

const MenuItem = styled(motion.div)`
  cursor: pointer;
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 3rem;
  padding: 10px 0;
`

export default SideNav

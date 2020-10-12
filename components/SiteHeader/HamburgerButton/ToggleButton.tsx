import {motion} from 'framer-motion'
import React from 'react'
import theme from '../../../styled/theme'
import styled from '../../../styled'

const transitionDelay = { transition: { delay: 0 } }

type ToggleButtonProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  isOpen: boolean
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ onClick, isOpen }) => {
  return (
    <Button onClick={onClick} initial={false} animate={isOpen ? 'open' : 'closed'}>
      <motion.svg
        width="23"
        height="23"
        viewBox="0 0 23 23"
        variants={{
          closed: { stroke: theme.colors.black, transition: { delay: 0.55 } },
          open: { stroke: theme.colors.black },
        }}
      >
        <Path
          variants={{
            closed: {
              ...transitionDelay,
              d: 'M 2 2.5 L 20 2.5',
            },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { ...transitionDelay, opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.07 }}
        />
        <Path
          variants={{
            closed: {
              ...transitionDelay,
              d: 'M 2 16.346 L 20 16.346',
            },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </motion.svg>
    </Button>
  )
}

const Button = styled(motion.button)`
  background-color: transparent;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10000;

  &:hover {
    background-color: transparent;
  }
`

const Path = styled(motion.path)`
  fill: transparent;
  stroke-linecap: round;
  stroke-width: 2px;
`

export default ToggleButton

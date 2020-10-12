import { motion } from 'framer-motion'
import { useModal } from 'react-modal-hook'
import React, {useEffect} from 'react'
import styled, {mqMin} from '../styled'

type Props = {
  handleHide: () => void
  showModal: boolean
  title?: string
}

const ContainerVariants = {
  close: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  }
}

const ModalVariants = {
  close: {
    y: 300,
  },
  open: {
    y: 0,
  }
}

const Modal: React.FunctionComponent<Props> = ({ children, handleHide, showModal, title = null }) => {
  const [show, hide] = useModal(() => (
    <Container
      initial="close"
      animate="open"
      exit="close"
      variants={ContainerVariants}
    >
      <Background onClick={handleHide} />
      <StyledModal
        initial="close"
        animate="open"
        exit="close"
        variants={ModalVariants}
      >
        <Header>
          {title && <h5>{title}</h5>}
          <CloseButton onClick={handleHide}>X</CloseButton>
        </Header>
        <Content>
          {children}
        </Content>
      </StyledModal>
    </Container>
  ), [])

  useEffect(() => {
    if (showModal) {
      show()
    } else {
      hide()
    }
  }, [showModal])

  return null
}

const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 1081;
`

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 28px;
  font-weight: bold;
  line-height: 24px;
  padding: 0 5px;
  transform: scaleY(70%);
  width: 28px;

  &:hover {
    background: none;
    color: ${({ theme }) => theme.colors.green};
  }
`

const Container = styled(motion.div)`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  pointer-events: all;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1080;
`

const Content = styled.div`
  padding: 15px;
`

const Header = styled.header`
  background-color: black;
  border-radius: 4px 4px 0 0;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  width: 100%;

  h5 {
    font-size: 2rem;
    margin: 0;
  }
`

const StyledModal = styled(motion.div)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  min-width: calc(100% - 30px);
  z-index: 1082;

  @media (${mqMin('xs')}) {
    max-width: 600px;
    min-width: 400px;
  }
`

export default Modal

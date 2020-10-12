import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '../layouts/default'
import styled from '../styled'

const ExampleSix = () => {
  const [centerText, setCenterText] = useState(false)

  const toggleCenterText = () => {
    setCenterText(!centerText)
  }

  return (
    <Layout title="Flexbox Properties">
      <motion.header
        style={{
          display: 'flex',
          justifyContent: centerText ? 'center' : 'flex-start',
        }}
      >
        <motion.h1>Flexbox Properties</motion.h1>
      </motion.header>
      <Subtitle>Voorbeeld 6</Subtitle>
      <Button onClick={toggleCenterText}>Align {centerText ? 'left' : 'center'}</Button>
    </Layout>
  )
}

const Button = styled.button`
  margin-top: 50px;
`

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 50px;
`

export default ExampleSix

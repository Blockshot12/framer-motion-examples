import { motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '../layouts/default'
import styled from '../styled'

const Variants = {
  initial: {
    x: -100,
  },
  animate: {
    x: 100,
  },
}

const Basics = () => {
  const [animateScale, setAnimateScale] = useState(false)

  const toggleScale = () => {
    setAnimateScale(!animateScale)
  }

  return (
    <Layout title="Framer Motion Basics">
      <h1>Framer Motion Basics</h1>
      <Subtitle>Animations</Subtitle>
      <h2>Animate & Initial</h2>
      <Example>
        <Ball animate={{ scale: animateScale ? 2 : 1 }} />
        <Button onClick={toggleScale}>Animate</Button>
      </Example>
      <h2>Transition</h2>
      <Example>
        <Ball initial={{ y: -100 }} animate={{ y: 100 }} transition={{ ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}/>
      </Example>
      <h2>Keyframes</h2>
      <Example>
        <Ball
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            loop: Infinity,
            repeatDelay: 1
          }}
        />
      </Example>
      <h2>Variants</h2>
      <Example>
        <Ball initial="initial" animate="animate" variants={Variants} transition={{ ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}/>
      </Example>
      <h2>Gestures</h2>
      <Example>
        <Ball
          drag
          dragConstraints={{
            top: -50,
            left: -50,
            right: 50,
            bottom: 50,
          }}
          whileHover={{ scale: 1.4 }}
          whileTap={{ scale: 0.6 }}
          style={{ cursor: 'pointer' }}
        />
      </Example>
    </Layout>
  )
}

const Ball = styled(motion.div)`
  background-color: white;
  border-radius: 50%;
  height: 60px;
  width: 60px;
`

const Button = styled.button`
  bottom: 10px;
  position: absolute;
  right: 10px;
`

const Example = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray500};
  display: flex;
  height: 400px;
  justify-content: center;
  margin-bottom: 100px;
  position: relative;
  width: 800px;
`

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 50px;
`



export default Basics
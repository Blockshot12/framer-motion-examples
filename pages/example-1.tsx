import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import Layout from '../layouts/default'
import styled from '../styled'

const MoreVariants = {
  hide: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
    }
  },
  show: {
    height: 'auto',
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
}

const ExampleOne = () => {
  const [showMore, setShowMore] = useState(false)

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Layout title="Animate Precense">
      <h1>Animate Presence </h1>
      <Subtitle>Voorbeeld 1</Subtitle>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus deleniti modi odio
        repellendus natus! Officiis officia quidem maxime est molestias incidunt nam in blanditiis enim
        quibusdam! Et voluptate dolorem provident facilis iusto neque magnam esse possimus voluptatum beatae
        repellat ipsa at aspernatur ratione optio temporibus nisi dolores, ad iure maxime amet. Magni, harum
        fugit! Beatae ullam consequuntur quae sequi adipisci earum soluta quas. Eligendi nulla fugit neque,
        optio nam, ducimus ea consectetur excepturi at deleniti, molestias soluta expedita officiis laborum
        natus! Excepturi, cumque neque fugiat perferendis quos, maiores alias iusto id officia cum magnam
        esse eaque incidunt molestiae illo consectetur reiciendis a odit sunt praesentium tenetur aliquid?
      </p>
      <AnimatePresence>
        {showMore && (
          <motion.div
            initial="hide"
            animate="show"
            exit="hide"
            variants={MoreVariants}
            style={{overflow: 'hidden'}}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, odit nulla reprehenderit,
            tenetur suscipit placeat animi ut at voluptates odio nisi quam esse praesentium officiis ab. Hic
            exercitationem temporibus rem repudiandae distinctio iure aliquam optio sint repellendus atque,
            corporis deserunt nulla esse numquam veniam voluptas, accusamus dignissimos fugiat in vitae. Cumque
            aspernatur velit labore laudantium corporis aut, nesciunt illo, magni aperiam aliquid mollitia
            laborum error quis exercitationem molestias! Quod minima similique iure voluptates mollitia pariatur,
            placeat quidem illo quae laborum aut ex aspernatur at nesciunt assumenda molestias eos aperiam. Quam,
            id! Iusto modi nihil iste rem eveniet ipsam esse impedit odio labore, repellat, quidem temporibus
            tempore aliquid? Fuga voluptas deleniti animi perspiciatis cupiditate, similique sint vero eveniet
            laboriosam, beatae, quibusdam sed blanditiis accusantium nam quisquam culpa maiores ab dolores quis
            delectus dolor itaque illo hic? Porro ipsam, aliquid unde natus laudantium, numquam soluta at aperiam
            necessitatibus, incidunt repellat debitis modi?
          </motion.div>
        )}
      </AnimatePresence>
      <ReadMoreBottom>
        <button onClick={toggleShowMore}>Lees meer</button>
      </ReadMoreBottom>
      <h2>Lorem ipsum</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere temporibus deleniti modi odio
        repellendus natus! Officiis officia quidem maxime est molestias incidunt nam in blanditiis enim
        quibusdam! Et voluptate dolorem provident facilis iusto neque magnam esse possimus voluptatum beatae
        repellat ipsa at aspernatur ratione optio temporibus nisi dolores, ad iure maxime amet. Magni, harum
        fugit! Beatae ullam consequuntur quae sequi adipisci earum soluta quas. Eligendi nulla fugit neque,
        optio nam, ducimus ea consectetur excepturi at deleniti, molestias soluta expedita officiis laborum
        natus! Excepturi, cumque neque fugiat perferendis quos, maiores alias iusto id officia cum magnam
        esse eaque incidunt molestiae illo consectetur reiciendis a odit sunt praesentium tenetur aliquid?
      </p>
    </Layout>
  )
}

const ReadMoreBottom = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.gray300};
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 12px 0;
  margin-top: 18px;
`

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
`

export default ExampleOne
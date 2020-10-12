import { useState } from 'react'
import Layout from '../layouts/default'
import Modal from '../components/Modal'
import styled from '../styled'

const ExampleTwo = () => {
  const [showModal, setShowModal] = useState(false)

  const handleShowModal = () => {
    setShowModal(true)
  }

  const handleHideModal = () => {
    setShowModal(false)
  }

  return (
    <Layout title="Voorbeeld 2">
      <h1>Animate Presence </h1>
      <Subtitle>Voorbeeld 1</Subtitle>
      <Button onClick={handleShowModal}>Show modal</Button>
      <Modal handleHide={handleHideModal} showModal={showModal} title="Modal voorbeeld">
        <h5>Lorem ipsum dolor sit amet</h5>
        <p>
          Consectetur adipisicing elit. Voluptatum nostrum quas rerum culpa? Et possimus assumenda quaerat
          dolor nam eveniet ipsam sunt sapiente ut praesentium ipsa illum deserunt accusantium facilis nemo
          ab, quia quidem sequi cupiditate eligendi debitis. Velit quas dignissimos molestiae, est veritatis
          quos illum fugit quidem deleniti impedit porro quibusdam, voluptatibus, possimus consectetur!
          Soluta dignissimos ex provident ducimus dolorem veritatis, unde ipsum consequuntur eum praesentium.
          Excepturi quas recusandae blanditiis labore quae esse id eaque, quasi fuga dolorem sed nostrum,
          architecto hic amet vero repellendus deserunt? Magni, rem numquam ex recusandae, maiores provident
          quis, voluptate inventore eius nulla eligendi!
        </p>
      </Modal>
    </Layout>
  )
}

const Button = styled.button`
  margin-top: 50px;
`

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
`

export default ExampleTwo

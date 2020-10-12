import Layout from '../layouts/default'
import styled from '../styled'

const ExampleFive = () => {
  return (
    <Layout title="Voorbeeld 3">
      <h1>Scroll animation</h1>
      <Subtitle>Voorbeeld 5</Subtitle>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((p) => (
        <Paragraph key={p}>
          <h5>Paragraph {p}</h5>
          <img
            style={{
              cursor: 'pointer',
            }}
            src={`https://picsum.photos/seed/100${p}/800/500`}
            alt="placeholder"
          />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error sunt quam officia.
            Debitis magnam earum, incidunt iusto nostrum velit atque ullam. Quaerat velit officia
            optio? Architecto corrupti corporis laboriosam quidem officiis ut pariatur, itaque
            provident porro, veritatis tenetur. Minima laborum repellendus facilis culpa,
            voluptatibus enim ullam deserunt magni natus distinctio harum perspiciatis quidem ea.
            Sapiente nam doloribus, dolorem aliquid praesentium sed exercitationem ut labore vitae
            debitis, porro laboriosam! Consequatur inventore rem ad, consectetur quas repellendus
            molestias omnis. Dolorem nostrum id, corrupti unde libero eos tenetur provident saepe,
            fugit consequatur quam esse temporibus veniam pariatur magnam itaque? Maiores
            voluptatum similique nulla labore dolore perspiciatis natus libero enim aut magni ab
            hic iure nam ea, eius et voluptate. Quibusdam vero assumenda magnam.
          </p>
        </Paragraph>
      ))}
    </Layout>
  )
}

const Subtitle = styled.h5`
  color: ${({ theme }) => theme.colors.gray300};
  margin-bottom: 50px;
`

const Paragraph = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray300};
  margin-bottom: 100px;
  padding-bottom: 80px;
`

export default ExampleFive

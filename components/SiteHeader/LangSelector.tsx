import styled, { mqMin } from '../../styled'

type Props = {
  active?: boolean
}

const LangSelector = () => {
  return (
    <List>
      <Item className="border">
        <Lang active={true}  href="/">NL</Lang>
      </Item>
      <Item>
        <Lang href="/">
          EN
        </Lang>
      </Item>
    </List>
  )
}

const List = styled.ul`
  display: none;
  height: 30px;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (${mqMin('sm')}) {
    display: flex;
  }
`

const Item = styled.li`
  &.border {
    border-right: 1px solid ${({theme}) => theme.colors.gray200};
  }
`

const Lang = styled.a<Props>`
  color: ${({ theme }) => theme.colors.black};
  display: block;
  font-family: ${(props) => (props.active ? ({theme}) => theme.fonts.bold : 'inherit')};
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 3px 10px 2px;
  z-index: 1040;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`

export default LangSelector

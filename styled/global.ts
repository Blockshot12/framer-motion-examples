import { css } from '@emotion/core'
import theme from './theme'
import styled, {mqMin} from './index'

const fonts = [
  'catamaran-v6-latin-ext_latin-100',
  'catamaran-v6-latin-ext_latin-500',
  'catamaran-v6-latin-ext_latin-700',
  'catamaran-v6-latin-ext_latin-regular',
]

export default css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    background-color: ${theme.colors.white};
    font-family: ${theme.fonts.thin};
    font-size: 1.8rem;
    line-height: 2.8rem;
    margin: 0;
    min-height: 100vh;
    padding: 0;
  }

  body {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  ${fonts.map((font) => {
    return `
      @font-face {
        font-family: ${font};
        src: url('/fonts/${font}.eot');
        src: url('/fonts/${font}.eot?#iefix') format('embedded-opentype'),
          url('/fonts/${font}.woff2') format('woff2'),
          url('/fonts/${font}.woff') format('woff'),
          url('/fonts/${font}.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
      }
    `
  })}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.medium};
    line-height: 2.4rem;
    font-weight: normal;
    margin: 0 0 1rem;
  }

  h1,
  h4 {
    font-size: 3.6rem;
    letter-spacing: 0.01rem;
    line-height: 4.2rem;

    @media (${mqMin('xs')}) {
      font-size: 4.8rem;
      letter-spacing: 0.04rem;
      line-height: 5.6rem;
    }

    @media (${mqMin('sm')}) {
      font-size: 6rem;
      line-height: 6.9rem;
    }
  }

  h2,
  h3 {
    font-size: 3.2rem;
    letter-spacing: 0.04rem;
    line-height: 3.6rem;

    @media (${mqMin('md')}) {
      font-size: 4.4rem;
      line-height: 5.1rem;
    }
  }

  h5 {
    font-size: 2.8rem;
    letter-spacing: 0.04rem;
    line-height: 3.2rem;
  }

  strong {
    font-family: ${theme.fonts.bold};
    letter-spacing: 0.04rem;
  }

  p {
    margin-top: 0;
  }

  a {
    color: ${theme.colors.white};
    text-decoration: none;
    transition: color 200ms ease;

    > svg {
      fill: ${theme.colors.white};
      transition: fill 200ms ease;
    }

    &:hover {
      color: ${theme.colors.green};

      > svg {
        fill: ${theme.colors.green};
      }
    }
  }

  button {
    background-color: white;
    border-radius: 21px;
    border: 1px solid black;
    cursor: pointer;
    font-family: ${theme.fonts.medium};
    font-size: 1.4rem;
    letter-spacing: 1px;
    padding: 12px 28px;
    text-transform: uppercase;
    transition: all 200ms ease;

    &:hover {
      background-color: black;
      color: ${theme.colors.green};
    }
  }
`

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`
import { AnimatePresence } from 'framer-motion'
import { Global, css } from '@emotion/core'
import { ModalProvider } from 'react-modal-hook'
import { ThemeProvider } from 'emotion-theming'
import { useRouter } from 'next/router'
import emotionNormalize from 'emotion-normalize'
import React, { createContext } from 'react'
import globalStyles from '../styled/global'
import theme from '../styled/theme'

export const ThemeContext = createContext(null)

const headerThemeDark = true

// function handleExitComplete() {
//   if (typeof window !== 'undefined') {
//     window.scrollTo({ top: 0 })
//   }
// }
// const container = () => ()
const LabApp = ({ Component, pageProps }) => {
  const router = useRouter()
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global
          styles={css`
            ${emotionNormalize}
            ${globalStyles}
          `}
        />
        <ThemeContext.Provider value={headerThemeDark}></ThemeContext.Provider>
        <ModalProvider rootComponent={AnimatePresence}>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default LabApp

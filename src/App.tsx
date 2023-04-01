import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { TopPage } from './features/TopPage'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    font-size: 62.5%;
  }
  html, body, #root {
    height: 100%;
    font-size: 1.0rem;
  }
  h1 {
    font-size: 1.8rem;
    padding: 0 0 16px 0;
  }
`

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

const ROUTER_BASENAME = process.env.PUBLIC_URL

function App() {
  return (
    <BrowserRouter basename={ROUTER_BASENAME}>
      <ChakraProvider theme={theme}>
        <GlobalStyle />
        <TopPage />
      </ChakraProvider>
    </BrowserRouter>
  )
}

export default App

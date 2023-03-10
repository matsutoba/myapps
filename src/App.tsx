import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { TopPage } from './features/TopPage'
import { BrowserRouter } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  ${reset};
  html, body, #root {
    height: 100%;
  }
`

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <TopPage />
    </BrowserRouter>
  )
}

export default App

import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  box-sizing: border-box;
  background-color: #eee;
  padding: 16px;
  vertical-align: middle;
`

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <p>matsutoba's</p>
    </Wrapper>
  )
}

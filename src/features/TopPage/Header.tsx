import React from 'react'
import styled from 'styled-components'
import { CircleClipImage } from '../../components/common/CircleClipImage'

const Wrapper = styled.div`
  width: 100%;
  height: 64px;
  background-color: #eee;
`

export const Header: React.FC = () => {
  return (
    <Wrapper>
      <CircleClipImage />
      <p>Site Header</p>
    </Wrapper>
  )
}

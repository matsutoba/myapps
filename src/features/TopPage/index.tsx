import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import { SideMenu } from './SideMenu'
import styled from 'styled-components'
import { Profile } from '../Profile'
import { CssSite } from '../CssSite'

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`

const Body = styled.div`
  display: flex;
  height: calc(100% - 64px);
`

const Content = styled.div`
  width: calc(100% - 192px);
  padding: 8px;
  box-sizing: border-box;
  overflow: auto;
`

export const TopPage: React.FC = () => {
  return (
    <Wrapper>
      <Header />
      <Body>
        <SideMenu />
        <Content>
          <Routes>
            <Route path="/myapps/profile" element={<Profile />} />
            <Route path="/myapps/csssite" element={<CssSite />} />
          </Routes>
        </Content>
      </Body>
    </Wrapper>
  )
}

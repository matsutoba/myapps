import React from 'react'
import styled from 'styled-components'
import { Accordion } from '../../components/common/Accordion'

const Wrapper = styled.div`
  width: 192px;
  background-color: #f0f8ff;
`

export const SideMenu: React.FC = () => {
  const handleClick = (path: string): void => {
    window.location.href = path
  }

  return (
    <Wrapper>
      <Accordion
        title="About"
        items={[
          {
            name: 'Profile',
            onClick: () => {
              handleClick('/myapps/profile')
            },
          },
        ]}
      />
      <Accordion
        title="ポートフォリオ"
        items={[
          {
            name: 'CSS',
            onClick: () => {
              handleClick('/myapps/csssite')
            },
          },
          {
            name: 'ToDo App',
            onClick: () => {
              handleClick('/myapps/forms')
            },
          },
        ]}
      />
    </Wrapper>
  )
}

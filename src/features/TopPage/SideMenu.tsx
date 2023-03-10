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
        title="Menu"
        items={[
          {
            name: 'Profile',
            onClick: () => {
              handleClick('/profile')
            },
          },
          {
            name: 'CSS',
            onClick: () => {
              handleClick('/csssite')
            },
          },
        ]}
      />
    </Wrapper>
  )
}

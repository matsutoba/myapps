import React, { useState } from 'react'
import styled from 'styled-components'

const CommonStyle = `
  height: 32px;
  line-height: 32px;
  padding: 0 8px;  
`

const Title = styled.div`
  ${CommonStyle};
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`

const ListItem = styled.ul<{ isOpen: boolean }>`
  //display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  transition: max-height 0.8s;
  & li {
    height: ${({ isOpen }) => (isOpen ? '32px' : 0)};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};    
    transition: 
      opacity 0.3s linear,
      height 0.3s linear,
      visibility 0.3s linear;
    
  }
`

const Item = styled.li`
  ${CommonStyle};
  &:hover {
    cursor: pointer;
    background-color: rgba(176, 196, 222, 0.16);
  }
`

interface AcoordionProps {
  title: string
  items: { name: string; onClick: () => void }[]
}

export const Accordion: React.FC<AcoordionProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleClick = (): void => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Title onClick={handleClick}>
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </Title>
      <ListItem isOpen={isOpen}>
        {items.map((item) => (
          <Item key={item.name} onClick={item.onClick}>
            {item.name}
          </Item>
        ))}
      </ListItem>
    </div>
  )
}

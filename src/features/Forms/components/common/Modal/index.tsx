import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.32);
  box-sizing: border-box;
`

const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: #ffffff;
  border-radius: 4px;
  filter: drop-shadow(2px 4px 6px #666);
  margin: 8px;
`

const ModalBody = styled.div`
  padding: 16px;
  height: calc(400px - 48px - 48px - 32px);
`

const Header = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  line-height: 48px;
  border: 1px solid #ccc;
  box-sizing: border-box;
`

const Footer = styled.div`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-top: 1px solid #ccc;
`

const FooterButton = styled.button<{ disabled?: boolean }>`
  margin-left: 8px;
  height: 32px;
  background-color: #2c3e50;
  border: 1px solid #2c3e50;
  color: #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  &:hover {
    opacity: 0.8;
  }
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`

export const Modal: React.FC<{
  title?: string
  open?: boolean
  onExecute?: () => void
  onCancel?: () => void
  isDisableExecute?: boolean
  children?: React.ReactNode
}> = ({
  title,
  open,
  onExecute,
  onCancel,
  isDisableExecute = false,
  children,
}) => {
  if (!open) return null

  return (
    <Wrapper>
      <ModalWrapper>
        {title && <Header>{title}</Header>}
        <ModalBody>{children}</ModalBody>
        <Footer>
          <FooterButton onClick={() => onCancel && onCancel()}>
            キャンセル
          </FooterButton>
          <FooterButton
            onClick={() => onExecute && onExecute()}
            disabled={isDisableExecute}
          >
            OK
          </FooterButton>
        </Footer>
      </ModalWrapper>
    </Wrapper>
  )
}

import styled from 'styled-components'
import { TextArea } from './TextArea'

const Wrapper = styled.div`
  margin: 0 0 32px 0;
`

export const Profile: React.FC = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Wrapper>
        <p>Reactサンプルページ</p>
      </Wrapper>
      <TextArea />
    </div>
  )
}

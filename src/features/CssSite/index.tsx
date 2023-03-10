import { useEffect } from 'react'

import styled from 'styled-components'
import { Site } from './Site'

const Wrapper = styled.div`
  margin: 0 0 32px 0;
`

export const CssSite: React.FC = () => {
  return (
    <div>
      <h1>CSS</h1>
      <Wrapper>
        <p>HTML/CSSサンプルページ</p>
        <p>
          写真はこちらのサイトを利用しています。{' '}
          <a href="https://www.pakutaso.com" title="無料の写真素材「ぱくたそ」">
            無料の写真素材「ぱくたそ」
          </a>
        </p>
      </Wrapper>
      <Site />
    </div>
  )
}

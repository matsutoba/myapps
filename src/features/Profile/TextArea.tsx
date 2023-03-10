import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'

const VirtualTextArea = styled.div`
  caret-color: transparent;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;

  &::after {
    content: '■'; /* 文字や画像を指定。空にして背景画像などにしてもOK */
    animation: blink 1s infinite; /* 点滅のアニメーションを指定。アニメーションの内容は以下の通り */
  }

  /* 点滅アニメーション */
  @keyframes blink {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    51% {
      opacity: 1;
    }
    100% {
      opacity: 1;
    }
  }
`
const breakLetter = ['、', '。']

const statement = [
  '■ プロフィール',
  '',
  '大学時代はニューラルネットワークを勉強し、Javaでロジック実装。',
  '',
  '大学卒業後、大手SIベンダーに入社。',
  '開発職を希望していたが配属先が教育部門だったので１年ほどで転職。',
  '',
  '次にSIベンダーに転職（金融、証券など硬い案件が多い会社でした。）',
  'Javaのプログラミングができたので、開発リーダーやアーキテクトを担当。',
  '',
  'その後、B2Cサービスを多く扱う会社に転職。',
  'ここからはどちらかというとマネージメント業務にシフト。',
  '',
  '2018年7月からフリーランスとして活動をはじめました。',
  '',
  '■ プログラミング言語',
  '',
  '現在はTypeScript/Reactの案件を多く対応しています。',
  '',
  '・Java(JDK1.0時代～)、C#(ここ数年)、PHP/Perl/Python(基本的なコーディングは可能）',
  '・React、TypeScript、HTML、CSS',
  '・バージョン管理システム：CVS, Subversion, Git',
  '',
  '',
  '詳細はプロフィールはWebサイトをご覧ください。',
]

const sleep = (second: number) =>
  new Promise((resolve) => setTimeout(resolve, second * 1000))

export const TextArea: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [isReady, setIsReady] = useState(false)
  const [text, setText] = useState('')

  const showLetter = async (letter: string): Promise<void> => {
    if (!isReady) return
    setText((text) => text.concat(letter))
    ref.current?.focus()
    const wait = breakLetter.includes(letter) ? 0.5 : 0.05
    await sleep(wait)
  }

  const showLine = async (str: string): Promise<void> => {
    for (let i = 0; i < str.length; i++) {
      await showLetter(str[i])
    }
    await sleep(1)
    setText((text) => text.concat('<br/>'))
  }

  const showText = async (): Promise<void> => {
    ref.current?.focus()
    await sleep(2)
    for (let i = 0; i < statement.length; i++) {
      await showLine(statement[i])
    }
  }

  useEffect(() => {
    if (isReady) {
      showText()
    }
  }, [isReady])

  useEffect(() => {
    setText('')
    setIsReady(true)
    return () => {
      setIsReady(false)
    }
  }, [ref])

  return (
    <VirtualTextArea
      ref={ref}
      dangerouslySetInnerHTML={{
        __html: text,
      }}
    ></VirtualTextArea>
  )
}

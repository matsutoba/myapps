import { RecoilRoot } from 'recoil'
import { Todo } from './components/Todo'

export const Forms: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <h1>Forms</h1>
        <Todo />
      </RecoilRoot>
    </>
  )
}

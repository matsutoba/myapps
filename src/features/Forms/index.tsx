import { RecoilRoot } from 'recoil'
import { Todo } from './components/Todo'

export const Forms: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <h1>ToDo App</h1>
        <Todo />
      </RecoilRoot>
    </>
  )
}

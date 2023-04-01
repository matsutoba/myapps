import { Box, Heading, Text } from '@chakra-ui/react'
import { RecoilRoot } from 'recoil'
import { Todo } from './components/Todo'

export const Forms: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <Heading>ToDo App</Heading>
        <Text>
          FullCalendar / styled-components / formik / Recoil のサンプル
        </Text>
        <Box pt={6}>
          <Todo />
        </Box>
      </RecoilRoot>
    </>
  )
}

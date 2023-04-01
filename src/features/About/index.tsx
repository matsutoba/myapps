import { Heading, Box, Text, UnorderedList, ListItem } from '@chakra-ui/react'

export const About: React.FC = () => {
  return (
    <Box>
      <Heading>このサイトについて</Heading>
      <Text pt={4}>このサイトで使用しているライブラリ</Text>
      <Box pt={4}>
        <Heading size="md">言語</Heading>
        <UnorderedList spacing={2} pt={4}>
          <ListItem>TypeScript</ListItem>
          <ListItem>React18</ListItem>
        </UnorderedList>
      </Box>
      <Box pt={4}>
        <Heading size="md">スタイリング</Heading>
        <UnorderedList spacing={2} pt={4}>
          <ListItem>Chakra UI</ListItem>
          <ListItem>styled-components</ListItem>
        </UnorderedList>
      </Box>
      <Box pt={4}>
        <Heading size="md">フォーム</Heading>
        <UnorderedList spacing={2} pt={4}>
          <ListItem>formik</ListItem>
        </UnorderedList>
      </Box>
      <Box pt={4}>
        <Heading size="md">状態管理</Heading>
        <UnorderedList spacing={2} pt={4}>
          <ListItem>Recoil</ListItem>
        </UnorderedList>
      </Box>
      <Box pt={4}>
        <Heading size="md">その他</Heading>
        <UnorderedList spacing={2} pt={4}>
          <ListItem>Fullcalendar</ListItem>
        </UnorderedList>
      </Box>
    </Box>
  )
}

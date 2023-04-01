import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { TextArea } from './TextArea'

export const ProfileBoard: React.FC = () => {
  return (
    <Flex direction="column" justify="space-between" align="flex-start">
      <Box>
        <Heading>プロフィール</Heading>
        <Text>async/awaitのサンプル</Text>
      </Box>
      <Box w="100%" pt={4}>
        <TextArea />
      </Box>
    </Flex>
  )
}

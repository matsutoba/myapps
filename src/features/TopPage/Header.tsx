import { Box, Flex, Heading, Icon, Link } from '@chakra-ui/react'
import React from 'react'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'

export const Header: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Heading size="lg">matsutoba's portofolio</Heading>
      </Box>
      <Box w={100}>
        <Flex justify="space-between">
          <Link href="https://github.com/matsutoba" target="_blank">
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Icon as={FaTwitter} w={6} h={6} />
          <Icon as={FaLinkedin} w={6} h={6} />
        </Flex>
      </Box>
    </Flex>
  )
}

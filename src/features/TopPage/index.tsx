import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './Header'
import { SideMenu } from './SideMenu'
import { Profile } from '../Profile'
import { CssSite } from '../CssSite'
import { Forms } from '../Forms'
import { Box, Flex } from '@chakra-ui/react'
import { About } from '../About'

export const TopPage: React.FC = () => {
  return (
    <Flex direction="column">
      <Box backgroundColor="gray.500" padding={4} color="gray.50" h="64px">
        <Header />
      </Box>
      <Box h="calc(100vh - 64px)">
        <Flex justify="space-between" h="100%">
          <Box w="150px" backgroundColor="gray.200" p={1}>
            <SideMenu />
          </Box>
          <Box p={4} flex={1}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/csssite" element={<CssSite />} />
              <Route path="/forms" element={<Forms />} />
            </Routes>
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

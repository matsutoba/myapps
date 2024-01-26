import { Box, Flex, Heading, Icon, Link, Tooltip } from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiHatenabookmark } from "react-icons/si";

export const Header: React.FC = () => {
  return (
    <Flex justify="space-between" align="center">
      <Box>
        <Heading size="lg">matsutoba's portofolio</Heading>
      </Box>
      <Box w={140}>
        <Flex justify="space-between">
          <Tooltip label="GitHub">
            <Link href="https://github.com/matsutoba" target="_blank">
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
          </Tooltip>
          <Tooltip label="hatena blog">
            <Link href="https://matsutoba.hateblo.jp/" target="_blank">
              <Icon as={SiHatenabookmark} w={6} h={6} />
            </Link>
          </Tooltip>
          <Icon as={FaTwitter} w={6} h={6} />
          <Icon as={FaLinkedin} w={6} h={6} />
        </Flex>
      </Box>
    </Flex>
  );
};

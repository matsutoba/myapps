import { Box, Heading, Link, Text } from "@chakra-ui/react";
import { Site } from "./Site";

export const CssSite: React.FC = () => {
  return (
    <Box w="100%">
      <Heading>CSS</Heading>

      <Text>HTML/CSSサンプルページ (React/chakra-ui)</Text>
      <Text>
        写真は
        <Link
          href="https://www.pakutaso.com"
          title="無料の写真素材「ぱくたそ」"
          target="_blank"
        >
          無料の写真素材「ぱくたそ」
        </Link>
        を利用しています。
      </Text>
      <Box pt={6} w="100%">
        <Site />
      </Box>
    </Box>
  );
};

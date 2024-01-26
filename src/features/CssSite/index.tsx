import {
  Box,
  Heading,
  Link,
  Text,
  Icon,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { RxOpenInNewWindow } from "react-icons/rx";
export const CssSite: React.FC = () => {
  return (
    <Box w="100%">
      <Heading marginBottom={4}>CSS</Heading>

      <Box marginBottom={4}>
        <Text>HTML/CSSサンプルページ</Text>
      </Box>

      <Box marginBottom={4}>
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
      </Box>

      <Box>
        <UnorderedList>
          <ListItem>
            <Box display="flex" alignItems="center">
              <Link
                href="/myapps/site/shop"
                title="HTML/CSSサンプルページ (SHOP)"
                target="_blank"
              >
                HTML/CSSサンプルページ (SHOP){" "}
              </Link>
              <Icon as={RxOpenInNewWindow} w={6} h={6} />
            </Box>
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

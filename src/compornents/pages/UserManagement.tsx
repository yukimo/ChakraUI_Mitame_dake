import { memo, VFC } from "react";
import { Box, Stack, Wrap, WrapItem, Image, Text } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <Wrap>
      <WrapItem>
        <Box w="268px" h="260px" bg="white" borderRadius="10px" shadow="md">
          {" "}
          <Stack textAlign="center">
            <Image
              boxSize="160px"
              borderRadius="full"
              src="https://source.unsplash.com/random"
              alt="プロフィール画像"
              m="auto"
            />
            <Text>じゃけえ</Text>
            <Text fontSize="lg" fontWeight="bold">
              Momiyama Yuki
            </Text>
          </Stack>
        </Box>
      </WrapItem>
    </Wrap>
  );
});

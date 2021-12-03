import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { memo, VFC, ReactNode } from "react";

type Props = { imageUrl: string; userName: string; fullName: string };

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl, userName, fullName } = props;
  return (
    <Flex>
      <Box
        /*  */
        /* flex-Grow="1" */
        w={{ base: "400px", md: "745px", xl: "870px" }}
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        m={2}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Image
            /* w={{base:"200px", md:"100px"}} */
            /* h={{ base: "500px", md: "300px" }} */
            /* boxSize="100%x" */
            borderRadius="full"
            src={imageUrl}
            alt={userName}
            m="auto"
          />
          <Text fontSize="lg" fontWeight="bold">
            {userName}
          </Text>
          <Text fontSize="sm" color="gray">
            {fullName}
          </Text>
        </Stack>
      </Box>
    </Flex>
  );
});

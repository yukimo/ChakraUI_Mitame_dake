import {
  Box,
  Flex,
  Image,
  Stack,
  Text,
  Wrap,
  WrapItem
} from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  imageUrl2: string;
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const UserCard: VFC<Props> = memo((props) => {
  const { imageUrl2, imageUrl, userName, fullName } = props;
  return (
    <Flex>
      <Box
        /* h={{ base: "400px", md: "745px", xl: "470px" }} */
        bg="white"
        borderRadius="10px"
        shadow="md"
        p={4}
        m={2}
        _hover={{ cursor: "pointer", opacity: 0.8 }}
      >
        <Stack textAlign="center">
          <Flex align="center">
            <Wrap align="center">
              <WrapItem align="center">
                <Image
                  w={{ base: "200px", md: "500px" }}
                  /* h={{ base: "500px", md: "300px" }} */
                  /* boxSize="100%x" */
                  borderRadius="50"
                  src={imageUrl}
                  alt={userName}
                  m="auto"
                  p="5"
                />
              </WrapItem>
              <WrapItem>
                <Text fontSize="lg" fontWeight="bold">
                  {userName}
                </Text>
                <Text fontSize="sm" color="gray">
                  {fullName}
                </Text>
              </WrapItem>
              <WrapItem>
                <Image
                  w={{ base: "200px", md: "500px" }}
                  borderRadius="50"
                  src={imageUrl2}
                  alt={userName}
                  m="auto"
                />
              </WrapItem>
            </Wrap>
          </Flex>
        </Stack>
      </Box>
    </Flex>
  );
});

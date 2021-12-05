import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }} justify="center">
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="AAAAAAA"
          fullName="aaaaaaaaa"
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="BBBBBBB"
          fullName="bbbbbbb"
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="CCCCCCC"
          fullName="cccccccc"
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://source.unsplash.com/random"
          userName="DDDDDDD"
          fullName="dddddddd"
        />
      </WrapItem>
    </Wrap>
  );
});

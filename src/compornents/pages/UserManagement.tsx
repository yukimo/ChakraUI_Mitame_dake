import { memo, VFC } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { UserCard } from "../organisms/user/UserCard";
export const UserManagement: VFC = memo(() => {
  return (
    <Wrap p={{ base: 4, md: 10 }} justify="center">
      <WrapItem>
        <UserCard
          imageUrl="https://drive.google.com/uc?id=1TmMGY06z_YnsBrEMeH1g7OqwuHJgLmY8"
          userName="AAAAAAA"
          fullName="aaaaaaaaa"
          imageUrl2="https://connpass-tokyo.s3.amazonaws.com/thumbs/4c/d1/4cd19c2c7ae0db829e661daa73a20cc9.png"
        />
      </WrapItem>
      <WrapItem>
        <UserCard
          imageUrl="https://connpass-tokyo.s3.amazonaws.com/thumbs/4c/d1/4cd19c2c7ae0db829e661daa73a20cc9.png"
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

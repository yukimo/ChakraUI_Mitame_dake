import { memo, VFC, useCallback, ReactNode } from "react";
import { Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
type Props = {
  children: ReactNode;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const history = useHistory();
  const onClickHome = useCallback(() => history.push("/home"), []);

  const { children } = props;
  return (
    <Button
      onClick={onClickHome}
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
    >
      {children}
    </Button>
  );
});

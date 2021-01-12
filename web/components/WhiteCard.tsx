import { LightMode, StackDivider, VStack } from "@chakra-ui/react";
import React, { memo, ReactNode } from "react";

const WhiteCard = ({ children, divide, padding = 4 }: { children?: ReactNode; divide?: boolean; padding?: number }) => {
  return (
    <LightMode>
      <VStack
        align="stretch"
        bg="white"
        color="black"
        borderRadius="md"
        boxShadow="lg"
        p={padding}
        spacing={divide ? padding : 0}
        divider={divide ? <StackDivider borderColor="gray.200" /> : undefined}
      >
        {children}
      </VStack>
    </LightMode>
  );
};

export default memo(WhiteCard);

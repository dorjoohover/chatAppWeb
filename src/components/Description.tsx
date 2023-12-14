import { Box, HStack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode, useLayoutEffect, useRef } from "react";
type DescritionType = {
  text: string;
  text1: string;
};
const Description: FC<DescritionType> = ({ text, text1 }) => {
  return (
    <>
      <Box w={"100%"} py={"1.2em"} overflow={"hidden"}>
        <HStack whiteSpace={"nowrap"} w={"auto"} gap={0}>
          <HStack className="marqueeStyle">
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"}>
              {text}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"black"}>
              {text1}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"}>
              {text}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
          </HStack>
          <HStack className="marqueeStyle2">
            <Text variant={"displayLight"} color={"black"}>
              {text1}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"}>
              {text}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"black"}>
              {text1}
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
};
export default Description;

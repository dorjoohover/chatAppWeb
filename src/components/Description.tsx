import { Box, HStack, Text } from "@chakra-ui/react";
import React, { FC, ReactNode, useLayoutEffect, useRef } from "react";

export default function Index() {
  return (
    <>
      <Box w={"100%"} py={"1.2em"} overflow={"hidden"}>
        <HStack whiteSpace={"nowrap"} w={"auto"} gap={0} >
          
          <HStack className="marqueeStyle">
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"}>
              Amazing
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={'black'}>Awesome</Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"}>
              Amazing
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
          </HStack>
          <HStack className="marqueeStyle2" >
            <Text variant={"displayLight"} color={'black'}>Awesome</Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={"lightGray"} >
              Amazing
            </Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
            <Text variant={"displayLight"} color={'black'}>Awesome</Text>
            <Text variant={"displayLight"} px={"0.2em"} color={"lightGray"}>
              •
            </Text>
          </HStack>
        </HStack>
      </Box>
    </>
  );
}

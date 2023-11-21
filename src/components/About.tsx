"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import gsap from "gsap";

import {
  about,
  aboutEnd,
  aboutHighlight,
  aboutStart,
  aboutTitle,
  introDisplay,
  introDisplay1,
  introHeader,
  register,
} from "@/global/string";
import CustomButton from "./Button";

import { aboutsLeft, aboutsRight, headers } from "@/global/values";
import { ScrollTrigger } from "gsap/all";
import { BgText } from "./Text";
export default function About() {
  const left = useRef(null);
  const right = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      left.current,
      {
        scrollTrigger: {
          trigger: left.current,
          scrub: true,
        },
        translateX: "-100%",
        rotateZ: "-25%",
      },
      {
        scrollTrigger: {
          trigger: left.current,
          scrub: true,
        },
        translateX: "0%",
        rotateZ: "0%",
      }
    );
    gsap.fromTo(
      right.current,
      {
        scrollTrigger: {
          trigger: right.current,
          scrub: true,
        },
        translateX: "100%",
        rotateZ: "25%",
      },
      {
        scrollTrigger: {
          trigger: right.current,
          scrub: true,
        },
        translateX: "0%",
        rotateZ: "0%",
      }
    );
  }, []);
  return (
    <VStack
      w={"full"}
      justifyContent={"center"}
      overflow={"hidden"}
      bg={"black"}
      borderRadius={"3.8em"}
      px={"4em"}
    >
      <Box h={"6.5em"} />
      <HStack w={"full"} alignItems={"start"}>
        <Box flex={2}>
          <Text variant={"text"}>{about}</Text>
        </Box>
        <Box fontSize={"1.39em"} color={"gray"} flex={3}>
          {aboutStart}
          <BgText text={aboutHighlight} />
          {aboutEnd}
        </Box>
      </HStack>
      <Box h={"3.7em"} />

      <HStack w={"full"} justifyContent={"space-between"} gap={"0.4em"}>
      <Box
          ref={left}
          pos={"relative"}
          h={"81vh"}
          maxH={"20em"}
          w={"full"}
        >
          {aboutsLeft.map((about, i) => {
            return (
              <Box
                key={i}
                bottom={i != 0 ? "1%" : 0}
                pos={"absolute"}
                top={i != 0 ? "-1%" : 0}
                left={i != 0 ? "-21%" : 0}
                right={i != 0 ? "21%" : 0}
                borderRadius={"1.3em"}
                overflow={"hidden"}
                className={`${i != 0 ? "aboutImgLeft" : ""} `}
              >
                <Image
                  src={about}
                  alt={`about ${i}`}
                  objectFit={"cover"}
                  h={"100%"}
                  w={"100%"}
                  display={"inline-block"}
                />{" "}
              </Box>
            );
          })}
        </Box>
        <VStack justifyContent={"center"}>
          <Text variant={"title"} textAlign={"center"} pb={'2em'}>
            {aboutTitle}
          </Text>
          <CustomButton
            text=""
            onClick={() => {}}
            type=""
            scale={true}
            child={
              <>
                <Box
                  pos={"absolute"}
                  boxShadow={"0 0 40px 20px rgba(0, 0, 0, .77)"}
                  inset={"-3%"}
                  borderRadius={"100%"}
                  className="btn-purple-bg"
                />
                <Box
                  w={"7.06em"}
                  h={"7.06em"}
                  pos={"relative"}
                  className="btn-purple"
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={"1.5em"}
                >
                  {register}
                </Box>
              </>
            }
          />
        </VStack>
        <Box
          ref={right}
          pos={"relative"}
          h={"81vh"}
          maxH={"20em"}
          w={"full"}
        >
          {aboutsRight.map((about, i) => {
            return (
              <Box
                key={i}
                bottom={i != 0 ? "1%" : 0}
                pos={"absolute"}
                top={i != 0 ? "-1%" : 0}
                left={i != 0 ? "21%" : 0}
                right={i != 0 ? "-21%" : 0}
                borderRadius={"1.3em"}
                overflow={"hidden"}
                className={`${i != 0 ? "aboutImgRight" : ""} `}
              >
                <Image
                  src={about}
                  alt={`about ${i}`}
                  objectFit={"cover"}
                  h={"100%"}
                  w={"100%"}
                  display={"inline-block"}
                />{" "}
              </Box>
            );
          })}
        </Box>
      </HStack>

      <Box h={"6.5em"} />
    </VStack>
  );
}

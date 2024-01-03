"use client";
import React, { useLayoutEffect, useRef } from "react";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import gsap from "gsap";

import {
  about,
  aboutEnd,
  aboutHighlight,
  aboutStart,
  aboutTitle,
  register,
} from "@/global/string";
import CustomButton from "./Button";

import { aboutsLeft, aboutsRight, headers } from "@/global/values";
import { ScrollTrigger } from "gsap/all";
import { BgText } from "./Text";
import AboutBottom from "./AboutBottom";
import Product from "./Product";
import ProductButtom from "./ProductBottom";
import Community from "./Community";

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
      px={{
        md: "5em",
        base: "2em",
      }}
    >
      <Box
        h={{
          md: "6.5em",
          base: "2em",
        }}
      />
      <HStack
        w={"full"}
        alignItems={"start"}
        flexDir={{
          md: "row",
          base: "column",
        }}
      >
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

      <HStack
        w={"full"}
        justifyContent={"space-between"}
        flexDir={{
          md: "row",
          base: "column",
        }}
        gap={"0.4em"}
      >
        <Box
          ref={left}
          pos={"relative"}
          h={"81vh"}
          maxHeight={{
            base: "20em",
            md: "20em",
          }}
          width={{
            md: "full",
            base: "14em",
          }}
          style={{
            transition: "0.3s ease all",
          }}
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
                  ref={left}
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
          <Text
            variant={"title"}
            textAlign={"center"}
            pb={{ md: "2em", base: "1em" }}
          >
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
                  fontSize={{
                    md: "1.2em",
                    base: "0.7em",
                  }}
                >
                  {register}
                </Box>
              </>
            }
          />
        </VStack>
        <Box
          ref={right}
          style={{
            transition: "0.3s ease all",
          }}
          pos={"relative"}
          h={"81vh"}
          maxHeight={{
            base: "20em",
            md: "20em",
          }}
          width={{
            md: "full",
            base: "14em",
          }}
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
      <Box
        h={{
          md: "2em",
        }}
      />
      <AboutBottom />
      <Box h={{ md: "10em", base: "5em" }} />
      <Product />
      <ProductButtom />
      <Box h={{
        md: '100vh',
        base: '50vh'
      }}/>
      <Community />
      {/* <CommunityBottom /> */}
      <Box h={"5em"} />
    </VStack>
  );
}

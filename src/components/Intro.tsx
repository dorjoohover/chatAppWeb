"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import styles from "./style.module.css";
import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import gsap from "gsap";

import {
  introDisplay,
  introDisplay1,
  introHeader,
  register,
} from "@/global/string";
import CustomButton from "./Button";
import ScrollMagic from "scrollmagic";
import { headers } from "@/global/values";
import { ScrollTrigger } from "gsap/all";
export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);
  const header = useRef(null);
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      header.current,
      {
        scrollTrigger: {
          trigger: header.current,
          scrub: true,
          start: "0px top",
          end: "bottom-=400px top",
        },

        left: "0",
        ease: "power3.Out",
      },
      {
        scrollTrigger: {
          trigger: header.current,
          scrub: true,
          start: "0px bottom",
          end: "bottom+=400px bottom",
        },

        left: "-30%",
        ease: "power3.Out",
      }
    );
  }, []);
  return (
    <VStack
      w={"full"}
      justifyContent={"center"}
      overflow={"hidden"}
      bg={"black"}
      borderBottomLeftRadius={"3.8em"}
      borderBottomRightRadius={"3.8em"}
    >
      <Box h={"6.5em"} />
      <Text variant={"smallText"}>{introHeader}</Text>
      <Text variant={"display"}>{introDisplay}</Text>
      <Text variant={"display"}>{introDisplay1}</Text>
      <Box h={10} />
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
              fontSize={"1.2em"}
            >
              {register}
            </Box>
          </>
        }
      />

      <Box ref={header} pos={"relative"} h={"10.11em"} w={"full"} mt={10}>
        <HStack pos={"absolute"} top={0} bottom={0} left={0} gap={"1.25em"}>
          {headers.map((header, i) => {
            return (
              <Box
                key={i}
                w={"10.11em"}
                h={"10.11em"}
                borderRadius={"1.3em"}
                overflow={"hidden"}
              >
                <Image
                  src={header}
                  alt={`header ${i}`}
                  objectFit={"cover"}
                  h={"100%"}
                  w={"100%"}
                  display={"inline-block"}
                />{" "}
              </Box>
            );
          })}
        </HStack>
      </Box>
      <Box h={"6.5em"} />
    </VStack>
  );
}

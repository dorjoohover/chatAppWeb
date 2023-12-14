"use client";
import { bottom, headers } from "@/global/values";
import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { imgHeader1 } from "@/global/assets";
import { BgText } from "./Text";
import { IconButton } from "./Button";

export default function Community() {
  const trigger = useRef(null);
  const bottom = useRef(null);

  const end = useRef(null);
  const header = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            // console.log(self.progress);
          },
        },
      });
      tl.fromTo(
        header.current,

        {
          left: 0,
          ease: "power3.Out",
        },
        {
          left: "-30%",
          ease: "power3.Out",
        }
      );
      let tl2 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: bottom.current,
          start: "top-=200 ",
          end: "bottom+=250 ",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            console.log(self.progress);
          },
        },
      });
      tl2.fromTo(
        end.current,

        {
          scale: 0.5,
          ease: "power3.Out",
        },
        {
          scale: 1,

          ease: "power3.Out",
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <Box>
      <VStack w={"full"} pos={"relative"}>
        <VStack
          top={"5%"}
          pos={"absolute"}
          left={0}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Text variant={"smallTitle"}>Improve your</Text>
          <Text variant={"smallTitle"} color={"titleGray"}>
            Communication
          </Text>
        </VStack>
        <HStack
          w={"full"}
          h={"200vh"}
          mb={"6em"}
          alignItems={"center"}
          ref={trigger}
        >
          <Box
            ref={header}
            pos={"absolute"}
            top={0}
            h={"16.7em"}
            w={"full"}
            mt={10}
          >
            <HStack
              pos={"absolute"}
              top={"50vh"}
              bottom={0}
              left={"-20%"}
              style={{
                transform: "rotate(345deg)",
              }}
              gap={"1.25em"}
            >
              {headers.map((header, i) => {
                return (
                  <Box
                    key={i}
                    w={"12.11em"}
                    h={"16.7em"}
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
        </HStack>
        <VStack
          bottom={"0"}
          pos={"absolute"}
          right={0}
          justifyContent={"start"}
          alignItems={"start"}
        >
          <Text variant={"smallTitle"}>Easy</Text>
          <Text variant={"smallTitle"} color={"titleGray"}>
            & unique
          </Text>
        </VStack>
      </VStack>
      <VStack w={"full"} justifyContent={"center"} ref={bottom}>
        <VStack ref={end}>
          <Image
            src={imgHeader1}
            borderRadius={"100%"}
            w={"10.53em"}
            h={"10.53em"}
            mb={4}
          />
          <HStack gap={"1em"}>
            <BgText text="Wow" variant="displayLight" lh={1.2} p={0} />
            <Text variant="displayLight">Your </Text>
            <Text variant="displayLight">Audience</Text>
          </HStack>
        </VStack>
        <IconButton text="" iconH="6.06em" iconW="6.06em" onClick={() => {}} />
       
      </VStack>
    </Box>
  );
}

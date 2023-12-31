"use client";
import { bottom, headers } from "@/global/values";
import { Box, HStack, Image, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { imgHeader1 } from "@/global/assets";
import { BgText } from "./Text";
import CustomButton, { IconButton } from "./Button";

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
          start: "top+=200px ",
          end: "bottom+=250px ",
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
          start: "top-=200px ",
          end: "bottom-=250px ",
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
        <HStack
          w={"full"}
          h={"200vh"}
          mb={{
            md: "100vh",
            base: "100vh",
          }}
          alignItems={"center"}
          ref={trigger}
        >
          <VStack
            top={{
              xl: "10%",
              lg: "15%",
              md: "25%",
              base: "25%",
            }}
            pos={"absolute"}
            left={{
              base: "10%",
              md: "-10%",
            }}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Text variant={"smallTitle"}>Improve your</Text>
            <Text variant={"smallTitle"} color={"titleGray"}>
              Communication
            </Text>
          </VStack>
          <Box
            ref={header}
            pos={"absolute"}
            top={{
              xl: 0,
              lg: "5%",
              base: "10%",
            }}
            h={"16.7em"}
            w={"full"}
            mt={10}
            style={{
              transition: "all 0.3s ease",
            }}
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
          <VStack
            top={{
              xl: "45%",
              lg: "45%",
              md: "45%",
              base: "50%",
            }}
            pos={"absolute"}
            right={{
              md: "-10%",
              base: "10%",
            }}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Text variant={"smallTitle"}>Easy</Text>
            <Text variant={"smallTitle"} color={"titleGray"}>
              & unique
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <VStack
        w={"full"}
        pos={"relative"}
        justifyContent={"center"}
        ref={bottom}
      >
        <VStack ref={end}>
          <Image
            src={imgHeader1}
            borderRadius={"100%"}
            w={"10.53em"}
            h={"10.53em"}
            mb={4}
          />
          <HStack
            gap={"1em"}
            flexDir={{
              md: "row",
              base: "column",
            }}
          >
            <HStack>
              <BgText text="Wow" variant="displayLight" lh={1.2} p={0} />
              <Text variant="displayLight">Your </Text>
            </HStack>
            <Text variant="displayLight">Audience</Text>
          </HStack>
        </VStack>
        <IconButton
          text=""
          iconH={{ md: "6.06em", base: "4em" }}
          iconW={{ md: "6.06em", base: "4em" }}
          onClick={() => {}}
        />
      </VStack>
      <HStack
        w={"full"}
        gap={8}
        mt={"2em"}
        flexDir={{
          md: "row",
          base: "column",
        }}
        px={{
          md: 0,
          base: '2.4em'
        }}
      >
        <VStack
          w={"full"}
          flex={1}
          alignItems={"start"}
          flexDir={{
            base: "row",
            md: "column",
          }}
          justifyContent={{
            md: "center",
            base: "start",
          }}
        >
          <Text variant={"displayLight"}>How</Text>
          <Text variant={"displayLight"} color={"titleGray"}>
            It
          </Text>
          <Text variant={"displayLight"}>Works</Text>
        </VStack>
        <Box
          flex={{
            md: 2,
            base: "auto",
          }}
          borderRadius={"2em"}
          w={"full"}
          maxW={"16em"}
          h={"21em"}
          overflow={"hidden"}
        >
          <Image src={imgHeader1} w={"full"} h={"full"} objectFit={"cover"} />
        </Box>
        <VStack
          justifyContent={"center"}
          w={"full"}
          flex={1}
          alignItems={"start"}
        >
          <Text color={"titleGray"} variant={"label"} mb={4}>
            We elevate <span className="text-white">phenomenal</span> solutions
            for growth by translating their future potential into a strategic
            brand narrative
          </Text>
          <CustomButton onClick={() => {}} text="Get Clixr" />
        </VStack>
      </HStack>
    </Box>
  );
}

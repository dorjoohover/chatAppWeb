"use client";
import { bottom } from "@/global/values";
import { Box, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function AboutBottom() {
  const trigger = useRef(null);
  const bottom1 = useRef(null);
  const bottom2 = useRef(null);
  const bottom3 = useRef(null);
  const bottom4 = useRef(null);
  const bottom5 = useRef(null);
  //   gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "bottom+=400 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {},
        },
      });
      tl.to(
        bottom1.current,

        {
          translateX: "-62%",
          translateY: "-33%",
          rotateZ: "-47deg",
        },
        0
      );
      tl.to(
        bottom2.current,

        {
          translateX: "-41%",
          translateY: "-36%",
          rotateZ: "-34deg",
        },
        0
      );
      tl.to(
        bottom3.current,

        {
          translateX: "-7%",
          translateY: "-35%",
          rotateZ: "-25deg",
        },
        0
      );
      tl.to(
        bottom4.current,

        {
          translateX: "17%",
          translateY: "-36%",
          rotateZ: "-14deg",
        },
        0
      );
      tl.to(
        bottom5.current,

        {
          translateX: "26%",
          translateY: "-33%",
          rotateZ: "9deg",
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <HStack
      w={"full"}
      h={{
        md: "200vh",
        base: "150vh",
      }}
      maxH={{
        md: "200vh",
        base: "150vh",
      }}
      ref={trigger}
    >
      <Box
        w={"full"}
        h={{
          md: "150vh",
          base: "100vh",
        }}
      >
        {bottom.map((img, i) => {
          let ref = bottom1;
          let transform = "translateX(-7%) translateY(-48%) rotateZ(-60deg)";
          switch (i) {
            case 1:
              ref = bottom2;
              transform = "translateX(-6%) translateY(-47%) rotateZ(-45deg)";
              break;
            case 2:
              ref = bottom3;
              transform = "translateX(-4%) translateY(-46%) rotateZ(-30deg)";
              break;
            case 3:
              ref = bottom4;
              transform = "translateX(-6%) translateY(-47%) rotateZ(-15deg)";
              break;
            case 4:
              ref = bottom5;
              transform = "translateX(-7%) translateY(-48%) rotateZ(0deg)";
              break;
          }

          return (
            <Image
              ref={ref}
              src={img}
              key={i}
              alt={`${i}`}
              w={"14.4em"}
              h={"14.4em"}
              objectFit={"cover"}
              borderRadius={"1.8em"}
              pos={"absolute"}
              top={"25%"}
              left={"50%"}
              willChange={"transform"}
              style={{
                transformStyle: "preserve-3d",
                transform: transform,
                transformOrigin: "0 100%",
              }}
            />
          );
        })}
      </Box>
    </HStack>
  );
}

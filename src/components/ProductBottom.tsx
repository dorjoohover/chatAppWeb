"use client";
import { bottom, productBottom } from "@/global/values";
import { Box, HStack, Image } from "@chakra-ui/react";
import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
export default function ProductButtom() {
  const trigger = useRef(null);
  const bottom1 = useRef(null);
  const bottom2 = useRef(null);
  const bottom3 = useRef(null);

  //   gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top+=10% ",
          end: "bottom+=200px ",
          scrub: true,
          pin: true,
          onUpdate: (self) => {},
        },
      });

      tl.to(
        bottom2.current,

        {
          translateX: "-140%",
        },
        0
      );
      tl.to(
        bottom3.current,

        {
          translateX: "40%",
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
        md: "150vh",
        base: "100vh",
      }}
      maxH={{
        md: "150vh",
        base: "100vh",
      }}
      style={{
        marginTop:'-15%'
      }}

      alignItems={"start"}
      ref={trigger}
    >
      <Box
        w={"full"}
        h={{
          md: "150vh",
          base: "100vh",
        }}
        maxH={{
          md: "150vh",
          base: "100vh",
        }}
      >
        {productBottom.map((img, i) => {
          let ref = bottom1;
          let transform = "translateX(-50%)";
          switch (i) {
            case 0:
              ref = bottom2;
              transform = "translateX(-100%) ";
              break;
            case 1:
              transform = "translateX(0)";
              ref = bottom3;
              break;
          }

          return (
            <Image
              ref={ref}
              src={img}
              key={i}
              zIndex={i}
              alt={`${i}`}
              w={i == 2 ? "15.3em" : "12.4em"}
              h={i == 2 ? "15.3em" : "12.4em"}
              objectFit={"cover"}
              borderRadius={"1.8em"}
              pos={"absolute"}
              top={i == 2 ? "25%" : "28%"}
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

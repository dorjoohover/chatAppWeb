"use client";
import { useRef, useEffect } from "react";
import { product, slogan } from "@/global/string";
import { VStack, Box, Text, HStack, Image } from "@chakra-ui/react";
import CustomButton, { IconButton } from "./Button";
import { imgHeader1, imgHeader2, imgHeader3 } from "@/global/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
export default function Product() {
  const trigger = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useEffect(() => {
    console.log('asdf');
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,

          onUpdate: (self) => {
            console.log(self.progress)
          },
        },
      });
      tl.to(
        img1.current,

        {

          translateY: "2em",
          rotateZ: "-8deg",
        },
        0
      );
      tl.to(
        img2.current,

        {
          translateY: "5em",
          rotateZ: "23deg",
        },
        0
      );
      tl.to(
        img3.current,

        {
          translateY: "-4em",
          rotateZ: "-1",
          rotateY: "-10deg",
        },
        0
      );
    });
    return () => ctx.revert();
  }, []);
  return (
    <VStack w={"full"} justifyContent={"center"} alignItems={"start"}>
      <Text variant={"display"} fontWeight={500} color={"titleGray"}>
        {slogan}
      </Text>
      <HStack alignItems={"center"} gap={"1em"} mb={"2em"}>
        <Text variant={"display"} fontWeight={500}>
          {product}
        </Text>
        <CustomButton onClick={() => {}} h="4em" w="9em" text="Get Clixr" />
      </HStack>
      <VStack mt={"3.8em"} pos={"relative"} ref={trigger} w={"full"}>
        <Box
          w={"full"}
          pos={"absolute"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Image
            src={imgHeader1}
            ref={img1}
            alt="product top 1 "
            w={"9.6em"}
            h={"9.6em"}
            objectFit={"cover"}
            borderRadius={"1.6em"}
            style={{
              transformStyle: "preserve-3d",
              transform: `translateX(1.7em) translateY(-2em)  rotateZ(-30deg)`,
            }}
            willChange={"transform"}
          />
          <Image
            src={imgHeader2}
            ref={img2}
            alt="product top 2 "
            w={"11em"}
            h={"11em"}
            objectFit={"cover"}
            borderRadius={"1.6em"}
            style={{
              transformStyle: "preserve-3d",
              transform: `translate3d(-1.8em,-2em ,1px) rotateZ(20deg)`,
            }}
            willChange={"transform"}
          />
        </Box>
        <VStack pos={"relative"} mt={"-1.5em"} w={"full"}>
          <VStack
            mt={"-3.3em"}
            pr={"1.1em"}
            justifyContent={"start"}
            alignItems={"start"}
          >
            <Text variant={"smallTitle"}>Real</Text>
            <Text variant={"smallTitle"} color={"titleGray"}>
              Pottential
            </Text>
            <IconButton text="Get Clixr" onClick={() => {}} />
          </VStack>
          <Box
            w={"full"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Image
              ref={img3}
              src={imgHeader3}
              alt="product top 3 "
              w={"13.4em"}
              h={"13.4em"}
              objectFit={"cover"}
              borderRadius={"1.6em"}
              style={{
                transformStyle: "preserve-3d",
                transform: `translate3d(0em,8em ,0px) rotateZ(-15deg)`,
              }}
              willChange={"transform"}
            />
          </Box>
        </VStack>
      </VStack>
      <Box h={"10em"} />
    </VStack>
  );
}
"use client";
import { useRef, useEffect } from "react";
import { product, slogan } from "@/global/string";
import { VStack, Box, Text, HStack, Image, Button } from "@chakra-ui/react";
import CustomButton, { IconButton } from "./Button";
import {
  greenArrow,
  imgHeader1,
  imgHeader2,
  imgHeader3,
} from "@/global/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import { BgText } from "./Text";

export default function Product() {
  const trigger = useRef(null);
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top-=200px top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {},
        },
      });
      let t2 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top-=200px top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {},
        },
      });
      let t3 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "top-=200px top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {},
        },
      });
      tl.fromTo(
        img1.current,

        {
          translateX: "1.7vw",
          translateY: "-2em",

          rotateZ: "-30deg",
        },
        {
          translateX: "1.7vw",
          translateY: "0.54em",

          rotateZ: "-16deg",
        }
      );

      t3.fromTo(
        img3.current,
        {
          translateY: "8em",
          rotateZ: "-15deg",
          rotateY: "0deg",
        },
        {
          translateY: "6em",
          rotateZ: "-6deg",
          rotateY: "-6deg",
        }
      );
      t2.fromTo(
        img2.current,

        {
          translateX: "-1.8vw",
          translateY: "-2em",
          rotateZ: "20deg",
          rotateY: "0deg",
        },
        {
          translateX: "-1.8vw",
          translateY: "2.4em",
          rotateZ: "24deg",
          rotateY: "14deg",
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <VStack w={"full"} justifyContent={"center"} alignItems={"start"}>
      <Text
      
        fontWeight={500}
        fontSize={{
          md: '4em',
          base: "2.5em",
        }}
        color={"titleGray"}
      >
        {slogan}
      </Text>
      <HStack alignItems={"center"} gap={"1em"} mb={"2em"}>
        <Text
           fontSize={{
            md: '4em',
            base: "2.5em",
          }}
          color={'white'}
          fontWeight={500}
        >
          {product}
        </Text>
        <CustomButton onClick={() => {}} h={{
          md: "4em",
          base: "2.5em"
        }} w={
          {
            md : "9em",
            base : '7em'
          }
        } text="Get Clixr" />
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
            style={{
              transition:'0.3s ease all',
              transformStyle: "preserve-3d",
            }}
            alt="product top 1 "
            w={{
              md: "9.6em",
              base: '8em'
            }}
            h={{
              md: "9.6em",
              base: '8em'
            }}
            objectFit={"cover"}
            borderRadius={"1.6em"}
           
            willChange={"transform"}
          />
          <Image
            src={imgHeader2}
            ref={img2}
            alt="product top 2 "
            w={{
              md: "11em",
              base: '9em'
            }}
            h={{
              md: "11em",
              base: '9em'
            }}
            objectFit={"cover"}
            borderRadius={"1.6em"}
            style={{
              transition:'0.3s ease all',
              transformStyle: "preserve-3d",
            }}
            willChange={"transform"}
          />
        </Box>
        <VStack pos={"relative"} mt={{
          md: "-1.5em",
          base: '3em'
        }} w={"full"}>
          <VStack
            mt={{
              md: "-3.3em",
              base: '5em'
            }}
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
            mt={{
              md: 0,
              base: '-6em'
            }}
          >
            <Image
              ref={img3}
              src={imgHeader3}
              alt="product top 3 "
              w={{
                md: "13.4em",
                base: '11em'
              }}
              h={{
                md: "13.4em",
                base: '11em'
              }}
              objectFit={"cover"}
              borderRadius={"1.6em"}
              style={{
                transition:'0.3s ease all',
                transformStyle: "preserve-3d",
              }}
              willChange={"transform"}
            />
          </Box>
        </VStack>
      </VStack>
      <Box h={"10em"} />
      <VStack
        w={"full"}
        mt={"-3.3em"}
        pr={"1.1em"}
        justifyContent={"start"}
        alignItems={"center"}
      >
        <Text variant={"smallTitle"}>All In One</Text>
        <Text variant={"smallTitle"} color={"titleGray"}>
          Product
        </Text>
        <Button>
          <HStack>
            <BgText text="Learn more" />
            <Image
              w={"1.2em"}
              src={greenArrow}
              style={{
                transition: "0.3s ease transform",
              }}
              _hover={{
                transform: "translateX(0.3em)",
              }}
            />
          </HStack>
        </Button>
      </VStack>
    </VStack>
  );
}

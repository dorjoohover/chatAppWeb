"use client";
import {
  Box,
  HStack,
  VStack,
  Text,
  Button,
  Image,
  Input,
  Link,
} from "@chakra-ui/react";
import CustomButton from "./Button";
import { useEffect, useRef, useState } from "react";
import { imgHeader1 } from "@/global/assets";
import gsap from "gsap";
import ScrollTrigger from "gsap/all";
import { BgText } from "./Text";
import { questions } from "@/global/values";
import { FaMinus } from "react-icons/fa";
export default function FooterPage() {
  const trigger = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const [active, setActive] = useState<number | undefined>(undefined);
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "-500 top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {},
        },
      });
      let t2 = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: trigger.current,
          start: "-500 top",
          end: "bottom bottom",
          scrub: true,

          onUpdate: (self) => {},
        },
      });
      tl.fromTo(
        first.current,

        {
          translateX: "-150%",
        },
        {
          translateX: 0,
        }
      );
      t2.fromTo(
        second.current,

        {
          translateX: "150%",
        },
        {
          translateX: 0,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <VStack
      w={"full"}
      justifyContent={"center"}
      overflow={"hidden"}
      bg={"black"}
      borderTopRightRadius={"3.8em"}
      borderTopLeftRadius={"3.8em"}
    >
      <VStack w={"full"} px={"5em"}>
        <Box h={"6.5em"} />
        <HStack w={"full"} alignItems={"start"} gap={"4em"}>
          <VStack flex={1} alignItems={"start"}>
            <Text variant={"title"} fontWeight={"bold"} mb={4}>
              What you’ll get
            </Text>
            <CustomButton
              type="btn-orange"
              onClick={() => {}}
              h="4em"
              w="9em"
              text="Get Clixr"
            />
          </VStack>
          <VStack
            flex={3}
            w={"full"}
            style={{
              backgroundImage:
                "linear-gradient(-15deg, #59fff1, rgba(94, 234, 244, .82) 7%, rgba(99, 208, 247, .6) 20%, rgba(108, 168, 252, .26) 37%, rgba(115, 138, 255, 0) 50%, rgba(0, 0, 0, 0))",
            }}
            borderRadius={"2em"}
            overflow={"hidden"}
            p={"0.1em"}
          >
            <VStack
              w={"full"}
              borderRadius={"2em"}
              bg={"black"}
              style={{
                backgroundImage:
                  "linear-gradient(198deg, #59fff1, rgba(94, 234, 244, .82) 13%, rgba(104, 189, 249, .44) 32%, rgba(112, 152, 253, .12) 48%, rgba(115, 138, 255, 0) 58%)",
              }}
              px={"3.6em"}
              py={"4.05em"}
              alignItems={"start"}
            >
              <Text variant={"text"}>High-Quality Assets</Text>
              <Text variant={"text"}>Life-Time Support </Text>
              <Text variant={"text"}>Fast Delivery</Text>
            </VStack>
          </VStack>
        </HStack>
        <Box h={"3.7em"} />
        <VStack w={"full"} alignItems={"start"}>
          <HStack alignItems={"start"} mb={"0.9em"}>
            <Text variant={"title"}>Frequently</Text>
            <Text variant={"title"} color={"titleGray"}>
              asked
            </Text>
            <Text variant={"title"}>questions</Text>
          </HStack>
          <VStack w={"full"} gap={6}>
            {questions.map((question, i) => {
              return (
                <VStack
                  w={"full"}
                  gap={4}
                  cursor={"pointer"}
                  onClick={() => {
                    if (active == i) {
                      setActive(undefined);
                    } else {
                      setActive(i);
                    }
                  }}
                >
                  <HStack w={"full"} justifyContent={"space-between"}>
                    <Text fontSize={"1em"} color={"white"} fontWeight={500}>
                      {question.title}
                    </Text>
                    <Box
                      style={{
                        backgroundImage:
                          "linear-gradient(284deg, #738aff, rgba(0, 0, 0, 0) 84%)",
                      }}
                      w={"1.4em"}
                      h={"1.4em"}
                      borderRadius={"100%"}
                      p={"0.1em"}
                      fontSize={"1em"}
                    >
                      <Box
                        cursor={"pointer"}
                        background={"black"}
                        display={"flex"}
                        justifyContent={"center"}
                        pos={"relative"}
                        alignItems={"center"}
                        borderRadius={"100%"}
                        w={"full"}
                        h={"full"}
                        style={{
                          backgroundImage:
                            "linear-gradient(225deg, #738aff, rgba(115, 138, 255, 0) 57%)",
                        }}
                      >
                        <FaMinus color="white" />
                        <FaMinus
                          className="absolute"
                          style={{
                            top: "50%",
                            left: "50%",
                            transform: `translate(-50%, -50% ) rotateZ(${
                              active == i ? "90deg" : "0deg"
                            })`,
                            transition: "transform 0.3s ease",
                            color: "white",

                            display:
                              active != undefined && active == i
                                ? "block"
                                : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </HStack>
                  {active != undefined && active == i && (
                    <Text fontSize={"0.55em"} color={"#ccc"}>
                      {question.value}
                    </Text>
                  )}
                </VStack>
              );
            })}
          </VStack>
        </VStack>
        <HStack
          w={"full"}
          justifyContent={"space-between"}
          gap={"0.4em"}
          ref={trigger}
        >
          <VStack alignItems={"start"} w={"full"} flex={1}>
            <VStack alignItems={"start"} ref={first}>
              <Text variant={"title"}>Everything</Text>
              <HStack mb={"2em"}>
                <Text variant={"title"} color={"titleGray"}>
                  you
                </Text>
                <Text variant={"title"}>need</Text>
              </HStack>
            </VStack>
            <HStack
              w={"full"}
              borderRadius={"10em"}
              style={{
                backgroundImage: "linear-gradient(305deg, #73ffa2, #000)",
              }}
              justifyContent={"space-between"}
              px={"0.1em"}
              pos={"relative"}
              overflow={"hidden"}
            >
              <Box
                pos={"absolute"}
                inset={0}
                style={{
                  backgroundImage:
                    "linear-gradient(186deg, #73ffa2, #53b775 15%, #3b8353 26%, #265335 36%, #000 54%, #000)",
                }}
              />
              <Input
                placeholder="Enter your email"
                outline={"none"}
                border={"none"}
                px={"1.5em"}
                color={"white"}
                _placeholder={{
                  color: "white",
                }}
                fontSize={"1.1em"}
                py={"0.5em"}
                h={"auto"}
                background={"none"}
                _focus={{
                  outline: "none !important",
                }}
                _active={{
                  outline: "none",
                }}
              />
              <Button
                style={{
                  backgroundImage:
                    "linear-gradient(225deg, #73ffa2, rgba(54, 120, 76, .47) 40%, rgba(0, 0, 0, 0) 50%)",
                  border: ".13em solid #73ffa2",
                  transition:
                    "transform .3s cubic-bezier(.175, .885, .32, 1.275)",
                }}
                px={"2em"}
                py={"1.17em"}
                h={"auto"}
                border={"10em"}
                bg={"black"}
                _hover={{
                  transform: "scale(0.9)",
                }}
              >
                Send
              </Button>
            </HStack>
          </VStack>
          <VStack alignItems={"end"} flex={1}>
            <Box
              w={"12.1em"}
              h={"18.4em"}
              ref={second}
              borderRadius={"10em"}
              overflow={"hidden"}
            >
              <Image
                src={imgHeader1}
                w={"100%"}
                h={"100%"}
                objectFit={"cover"}
              />
            </Box>
          </VStack>
        </HStack>

        <Box h={"2em"} />
      </VStack>
      <Box
        w={"full"}
        style={{
          backgroundImage: "linear-gradient(27deg, #738aff, #000)",
        }}
        borderRadius={"2em"}
        px={"0.1em"}
        pb={"0.1em"}
      >
        <HStack
          w={"full"}
          px={"4em"}
          justifyContent={"space-between"}
          style={{
            backgroundImage:
              "linear-gradient(#7373ff, rgba(115, 115, 255, 0) 50%)",
          }}
          bg={"black"}
          borderRadius={"2em"}
        >
          <HStack flex={2} w={"full"}>
            <VStack alignItems={"start"} flex={1}>
              <Text variant={"label"}>Socials</Text>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Twitter
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Facebook
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Instagram
              </Link>
            </VStack>
            <VStack alignItems={"start"} flex={1}>
              <Text variant={"label"}>Contact</Text>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Address
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Email
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                +97688992864
              </Link>
            </VStack>
            <VStack alignItems={"start"} flex={1}>
              <Text variant={"label"}>Links</Text>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                License
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                Youtube
              </Link>
              <Link fontSize={"0.632em"} color={"titleGray"}>
                TrustPilot
              </Link>
            </VStack>
          </HStack>
          <Box w={"full"} flex={1} py={"1.5em"}>
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
                    w={"6.35em"}
                    h={"6.35em"}
                    pos={"relative"}
                    className="btn-purple"
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    fontSize={"1.5em"}
                  >
                    Get Glixr
                  </Box>
                </>
              }
            />
          </Box>
          <VStack
            h={"full"}
            justifyContent={"end"}
            alignItems={"start"}
            ml={"auto"}
          >
            <HStack>
              <Text variant="smallLabel">Design & Development by</Text>
              <BgText text="Hover" variant="smallLabel" lh={1} />
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </VStack>
  );
}

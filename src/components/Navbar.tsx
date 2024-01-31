"use client";
import { imgLogo, logo, logoWhite } from "@/global/assets";
import { register } from "@/global/string";
import { navbar } from "@/global/values";
import { Box, Button, HStack, Image, Stack, Text } from "@chakra-ui/react";

import Link from "next/link";
import CustomButton from "./Button";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname()
  let textColor = pathname.split('/')[1] == "" ? "white"  : 'black'
  let currentLogo = pathname.split('/')[1] == "" ? logoWhite  : logo
  const [active, setActive] = useState(false);
  return (
    <HStack
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={100}
      bg={{
        lg: "transparent",
        base: "black",
      }}
    >
      <HStack
        mx={{ md: "3.44em", base: "1em" }}
        p={{ md: "0.6em" }}
        px={{
          md: 0,
          base: "0.6em",
        }}
        justifyContent={"space-between"}
        alignItems={{
          lg: "center",
          base: " start",
        }}
        w={"full"}
        bgImage={{
          lg: "",
          base: active ? "linear-gradient(210deg, #738aff, #000 43%)" : "",
        }}
        borderRadius={{
          lg: 0,
          base: "2em",
        }}
      >
        <HStack
          gap={{ md: "1.06em" }}
          flexDir={{
            lg: "row",
            base: "column",
          }}
          alignItems={{
            lg: "center",
            base: "start",
          }}
          w={{
            lg: "auto",
            base: "full",
          }}
        >
          <Link href={"/"}>
            <Box
              h={{
                lg: "100%",
                base: "40px",
              }}
              display={"flex"}
              alignItems={"center"}
            >
              <Image alt="Logo" h={".66em"} src={currentLogo} />
            </Box>
          </Link>
          <HStack
            gap={{ md: "1.06em" }}
            display={{
              lg: "flex",
              base: active ? "flex" : "none",
            }}
            flexDir={{
              lg: "row",
              base: "column",
            }}
            alignItems={{
              lg: "center",
              base: "start",
            }}
            w={{
              lg: "auto",
              base: "full",
            }}
          >
            {navbar.map((nav, i) => {
              return (
                <Link href={nav.value} key={i}>
                  <Text
                    variant={"smallLabel"}
                    className="link"
                    color={textColor}
                    py={{
                      lg: "1.6em",
                      base: "0.8em",
                    }}
                  >
                    {nav.text}
                  </Text>
                </Link>
              );
            })}
            <Stack
              mb={"2em"}
              display={{
                lg: "none",
                base: "flex",
              }}
            >
              <Link href={'/auth'}>
              <CustomButton
                text={register}
                onClick={() => {
                  router.push("/auth");
                }}
              /></Link>
            </Stack>
          </HStack>
        </HStack>
        <Button
          display={{
            lg: "none",
            base: "inline-flex",
          }}
          color={"white"}
          w={"40px"}
          h={"40px"}
          p={0}
          onClick={() => {
            setActive(!active);
          }}
        >
          {!active && <HamburgerIcon color={"white"} />}
          {active && <CloseIcon color={"white"} />}
        </Button>
        <Box
          display={{
            lg: "flex",
            base: "none",
          }}
        >
          <CustomButton
            text={register}
            onClick={() => {
              router.push("/auth");
            }}
          />
        </Box>
      </HStack>
    </HStack>
  );
};

export default Navbar;

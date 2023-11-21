import { imgLogo, logo } from "@/global/assets";
import { register } from "@/global/string";
import { navbar } from "@/global/values";
import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";

import Link from "next/link";
import CustomButton from "./Button";
const Navbar = () => {
  return (
    <HStack
      mx={{ md: "3.44em" }}
      p={{ md: "0.6em" }}
      justifyContent={{
        md: "space-between",
      }}
      pos={"fixed"}
      top={0}
      left={0}
      right={0}
      zIndex={100}
    >
      <HStack gap={{ md: "1.06em" }}>
        <Link href={"/"}>
          <Image alt="Logo" h={".66em"} src={logo} />
        </Link>
        {navbar.map((nav, i) => {
          return (
            <Link href={nav.value} key={i}>
              <Text variant={"smallLabel"} className="link" py={"1.6em"}>
                {nav.text}
              </Text>
            </Link>
          );
        })}
      </HStack>
      <CustomButton text={register} onClick={() => {}}/>
    </HStack>
  );
};

export default Navbar;

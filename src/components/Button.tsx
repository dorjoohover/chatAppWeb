"use client";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FC, ReactNode, useEffect, useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
import { iconArrow } from "@/global/assets";
type ButtonType = {
  text: string;
  child?: ReactNode;
  onClick: () => void;
  type?: string;
  scale?: boolean;
  h?: string;
  w?: string;
  iconW?: string;
  iconH?: string;
};

const CustomButton: FC<ButtonType> = ({
  text,
  child,
  onClick,
  type,
  scale,
  h = "full",
  w = "auto",
}) => {
  const [sizes, setSizes] = useState({ x: 0, y: 0 });

  return (
    <Button w={w} h={h} p={0} onClick={onClick}>
      <Box
        style={{
          transform: `translate3d(${sizes.x}%, ${
            sizes.y
          }%, 0px) rotateX(0deg) scale3d(${
            scale && (sizes.x != 0 || sizes.y != 0) ? 0.9 : 1
          }, ${
            scale && (sizes.x != 0 || sizes.y != 0) ? 0.9 : 1
          }, 1) rotateY(0deg) rotateZ(0deg) skew(0deg)`,
        }}
        pos={"relative"}
        className={` ${type ?? "btn-green"} `}
        willChange={"transform"}
        h={"100%"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"full"}
      >
        {child ?? text}
      </Box>
      <Box
        onMouseMoveCapture={(e: { nativeEvent: any; target: any }) => {
          let h = e.target.scrollHeight;
          let w = e.target.scrollWidth;
          let x = e.nativeEvent.layerX;
          let y = e.nativeEvent.layerY;

          x = ((x - w / 2) * 7) / (w / 2);
          y = ((y - h / 2) * 10) / (h / 2);
          setSizes({ x: x, y: y });
        }}
        onMouseLeave={(e: any) => {
          setSizes({
            x: 0,
            y: 0,
          });
        }}
        onMouseOut={() => {
          setSizes({
            x: 0,
            y: 0,
          });
        }}
        zIndex={100}
        as="span"
        top={"-50%"}
        left={"-20%"}
        right={"-20%"}
        bottom={"-50%"}
        pos={"absolute"}
        display={"block"}
        p={0}
      />
    </Button>
  );
};
export const IconButton: FC<ButtonType> = ({
  text,
  child,
  onClick,
  type,

  h = "full",
  w = "auto",
  iconW,
  iconH,
}) => {
  return (
    <Button w={w} h={h} p={0} onClick={onClick}>
      <Text variant={"text"} mr={"1em"}>
        {text}
      </Text>
      <Box
        w={iconW ?? "2.7em"}
        h={iconH ?? "2.7em"}
        p={"0.1em"}
        className={type ?? "btn-text-green"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src={iconArrow} w={"43%"} />
      </Box>
    </Button>
  );
};
export default CustomButton;

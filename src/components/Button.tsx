"use client";
import { Box, Button } from "@chakra-ui/react";
import { FC, ReactNode, useEffect, useState } from "react";
import { motion, isValidMotionProp } from "framer-motion";
type ButtonType = {
  text: string;
  child?: ReactNode;
  onClick: () => void;
  type?: string;
  scale?: boolean;
};

const CustomButton: FC<ButtonType> = ({
  text,
  child,
  onClick,
  type,
  scale,
}) => {
  const [sizes, setSizes] = useState({ x: 0, y: 0 });

  return (
    <Button h={"auto"} p={0} onClick={onClick}>
      <Box
        as={motion.div}
        transform={`translate3d(${sizes.x}%, ${
          sizes.y
        }%, 0px) rotateX(0deg) scale3d(${
          scale && (sizes.x != 0 || sizes.y != 0) ? 0.8 : 1
        }, ${
          scale && (sizes.x != 0 || sizes.y != 0) ? 0.8 : 1
        }, 1)  rotateY(0deg) rotateZ(0deg) skew(0deg)`}
        translateX={"-100px"}
        className={` ${type ?? "btn-green"} `}
        willChange={"transform"}
        w={"full"}
        h={"full"}
      >
        {child ?? text}
      </Box>
      <Box
        onMouseMoveCapture={(e: { nativeEvent: any; target: any }) => {
          let h = e.target.scrollHeight;
          let w = e.target.scrollWidth;
          let x = e.nativeEvent.layerX;
          let y = e.nativeEvent.layerY;
          // console.log(e)
          x = ((x - w / 2) * 7) / (w / 2);
          y = ((y - h / 2) * 10) / (h / 2);
          setSizes({ x: x, y: y });
        }}
        onMouseLeave={(e) => {
       
          setSizes({
            x: 0,
            y: 0,
          });
        }}
        as="span"
        top={"-50%"}
        left={"-15%"}
        right={"-15%"}
        bottom={"-50%"}
        pos={"absolute"}
        display={"block"}
        p={0}
      />
    </Button>
  );
};
export default CustomButton;

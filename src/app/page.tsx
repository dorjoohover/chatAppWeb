"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";

import LocomotiveScroll from "locomotive-scroll";
import { Box } from "@chakra-ui/react";
import About from "@/components/About";
export default function Home() {
  useEffect(() => {
    (async () => {
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);

  return (
    <Box>
      <Intro />
      <Description />
      <About />
    </Box>
  );
}

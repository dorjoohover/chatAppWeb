"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";

import { Box } from "@chakra-ui/react";
import About from "@/components/About";
import Product from "@/components/Product";
export default function Home() {
  return (
    <Box>
      <Intro />
      <Description />
      <About />

    </Box>
  );
}

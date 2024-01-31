"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import Intro from "../components/Intro";
import Description from "../components/Description";

import { Box } from "@chakra-ui/react";
import About from "@/components/About";
import Product from "@/components/Product";
import FooterPage from "@/components/Footer";
import { getAuth } from "@firebase/auth";
import { initializeApp } from "@firebase/app";

export default function Home() {
  return (
    <Box>
      <Intro />
      <Description text="Amazing" text1="Awesome" />
      <About />
      <Description text="Technology" text1="Community" />
      <FooterPage />
    </Box>
  );
}

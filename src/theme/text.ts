import { defineStyleConfig } from "@chakra-ui/react";
const Text = defineStyleConfig({
  baseStyle: {
    fontSize: "1em",
    lineHeight: "1.3",
  },
  variants: {
    display: {
      fontSize: "4em",
      lineHeight: "1",

      color: "white",
      fontWeight: 'bold'
    },
    displayLight: {
      fontSize: "3.54em",
      lineHeight: "1.25",

      color: "white",

    },
    title: {
      fontSize: "2.53em",
      color: "white",
      fontWeight: "500",
    },
    smallTitle: {
      fontSize: "2.02em",
      color: "white",
      fontWeight: "500",
      lineHeight: "1.3",
    },
    text: {
      fontSize: "1.37em",
      color: "white",
      lineHeight: "1.5",
      fontWeight: "500",
    },
    label: {
      fontSize: "0.76em",
      color: "white",

      fontWeight: "500",
    },
    smallLabel: {
      fontSize: "0.632em",
      color: "white",

      fontWeight: "500",
    },
    largeLabel: {
      fontSize: "1em",
      color: "white",

      fontWeight: "500",
    },
    smallText: {
      fontSize: "1.15em",
      color: "white",
      lineHeight: "1.2",
      fontWeight: "500",
    },
    largeText: {
      lineHeight: "2.1",
      fontSize: "1.39em",
      fontWeight: "500",
    },
    miniTitle: {
      fontSize: "16px",
      color: "white",
      fontWeight: "bold",
    },

    normal: {
      fontSize: "16px",
      fontWeight: 500
    },
  },
});
export default Text;

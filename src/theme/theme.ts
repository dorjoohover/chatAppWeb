import { extendTheme } from "@chakra-ui/react";
import Button from "./button";

import Text from "./text";
import Input from "./input";

export const theme = extendTheme({
  colors: {
    prime: '#73ffa2',
    purple: '#7373ff',
    lightGray: '#b3b3b3',
    titleGray: '#8c8c8c'
  },
 
  components: {
    Button,
    Text,
    Input
  }
});

import { textBg } from "@/global/assets";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

type TextType = {
  text: string;
};
export const BgText: FC<TextType> = ({ text }) => {
  return (
    <Text
      as={"span"}
      bgImage={textBg}
      bgPosition={"50% 100%"}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      px={'0.2em'}
      color={'white'}
      lineHeight={2.1}
      pb={'0.4em'}
    >
      {text}
    </Text>
  );
};

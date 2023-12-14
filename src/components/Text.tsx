import { textBg } from "@/global/assets";
import { Text } from "@chakra-ui/react";
import { FC } from "react";

type TextType = {
  text: string;
  variant?: string;
  p?: number;
  lh?: number;
};
export const BgText: FC<TextType> = ({ text, variant, p, lh }) => {
  return (
    <Text
      as={"span"}
      bgImage={textBg}
      bgPosition={"0% 100%"}
      bgSize={"contain"}
      bgRepeat={"no-repeat"}
      px={"0.2em"}
      color={"white"}
      lineHeight={lh ?? 2.1}
      pb={"0.4em"}
      p={p}
      variant={variant}
    >
      {text}
    </Text>
  );
};

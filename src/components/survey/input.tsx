import { ContentTypes, TextBoxTypes } from "@/global/enum";
import { SurveyStrings } from "@/global/string";
import { ContentDetailModel } from "@/models/Survey.model";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { ChangeEvent, FC } from "react";
import { BiRectangle } from "react-icons/bi";
import { FaRegCircle } from "react-icons/fa";

type TextInputType = {
  value?: string;
  active?: boolean;
  focus?: boolean;
  name: string;
  fs?: number;
  general?: boolean;
  onChange: (e: string) => void
};
export const TextInput: FC<TextInputType> = ({
  value,
  name,
  active,
  fs = 16,
  focus,
  onChange,
  general,
}) => {
  return (
    <Input
      w={"full"}
      onChange={(e) => onChange(e.target.value)}
      p={general ? 0 : 4}
      bg={general ? "white" : "#f8f9fa"}
      _hover={{
        bg: `${general ? "white" : "#f1f3f4"}`,
      }}
      borderRadius={0}
      h={"auto"}
      borderBottom={`${active ? "1px" : "0px"} solid black`}
      borderColor={"rgba(0,0,0,.12)"}
      name={name}
      defaultValue={value ?? ""}
      fontSize={fs}
      lineHeight={1.25}
      autoFocus={focus}
    />
  );
};

export const TextAnswerWidget = ({ text }: { text: string }) => {
  return (
    <VStack w="full" alignItems={"start"} gap={4}>
      <Input
        borderBottom={"1px solid white"}
        borderColor={"rgb(218,220,224)"}
        w={"50%"}
        placeholder={text}
        disabled
      />

      <Input
        borderBottom={"1px solid white"}
        borderColor={"rgb(218,220,224)"}
        w={"100%"}
        disabled
      />
    </VStack>
  );
};
export const ListWidget = ({
  list,
  type,
  active,
  add,
  other,
  close,
  onChange,
}: {
  active?: boolean;
  list?: ContentDetailModel[];
  other: () => void;
  add: () => void;
  close: (i: number) => void;
  onChange: (e: string, i: number) => void;
  type: TextBoxTypes;
}) => {
  return (
    <Stack pb={6} borderBottom={"1px solid white"} borderColor={"#e0e0e0"}>
      {list?.map((e, i) => {
        return (
          <HStack gap={4} key={i} w={"full"}>
            {type == TextBoxTypes.DROPDOWN && (
              <Text variant={"normal"} color={"rgb(32,33,36)"}>
                {i + 1}.
              </Text>
            )}
            {type == TextBoxTypes.CHECKBOX && (
              <Icon as={BiRectangle} color={"#444"} fontSize={24} />
            )}
            {type == TextBoxTypes.MULTIPLE && (
              <Icon as={FaRegCircle} color={"#444"} fontSize={24} />
            )}
            <Input
              onChange={(e) => {
                onChange(e.target.value, i);
              }}
              value={e.content ?? ""}
              borderRadius={0}
              px={0}
              name={`radio${i}`}
              disabled={e.type == ContentTypes.OTHER}
              borderBottom={"1px solid white"}
              w="full"
              transition={"all 0.1s ease"}
              _focus={{
                borderColor: "rgb(76, 43, 135)",
                borderBottomWidth: "2px",
              }}
              _active={{
                borderColor: "rgb(76, 43, 135)",
              }}
              _hover={{
                borderColor: "#e0e0e0",
              }}
            />{" "}
            {active && list != undefined && list?.length > 1 && (
              <Button
                onClick={() => {
                  close(i);
                }}
                variant={"default"}
                w={12}
                height={12}
                px={6}
              >
                <CloseIcon boxSize={4} fontSize={20} />
              </Button>
            )}
          </HStack>
        );
      })}
      <HStack gap={4}>
        {type == TextBoxTypes.DROPDOWN && (
          <Text variant={"normal"} color={"rgb(32,33,36)"}>
            {(list?.length ?? 0) + 1}.
          </Text>
        )}
        {type == TextBoxTypes.CHECKBOX && (
          <Icon as={BiRectangle} color={"#444"} fontSize={24} />
        )}
        {type == TextBoxTypes.MULTIPLE && (
          <Icon as={FaRegCircle} color={"#444"} fontSize={24} />
        )}

        <HStack>
          <Button
            onClick={() => {
              add();
            }}
            px={0}
            color={"#444"}
            borderBottom={"1px solid white"}
            _hover={{
              borderColor: "#e0e0e0",
              bg: "none",
            }}
            fontSize={14}
            borderRadius={0}
            style={{
              padding: "0px !important",
            }}
            py={1}
            height={"auto"}
          >
            {SurveyStrings.addOption}
          </Button>
          {type != TextBoxTypes.DROPDOWN && (
            <Text fontSize={14} color={"#444"}>
              {SurveyStrings.or}
            </Text>
          )}
          {type != TextBoxTypes.DROPDOWN && (
            <Button
              onClick={() => {
                other();
              }}
              px={0}
              color={"#444"}
              borderBottom={"1px solid white"}
              _hover={{
                borderColor: "#e0e0e0",
                bg: "none",
              }}
              fontSize={14}
              borderRadius={0}
              style={{
                padding: "0px !important",
              }}
              py={1}
              height={"auto"}
            >
              {SurveyStrings.addOther}
            </Button>
          )}
        </HStack>
      </HStack>
    </Stack>
  );
};

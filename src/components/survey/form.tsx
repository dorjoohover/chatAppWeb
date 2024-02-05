import {
  ContentDetailModel,
  SurveyDetailModel,
  SurveyModel,
} from "@/models/Survey.model";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Dispatch, FC, SetStateAction, useState } from "react";
import FormSideBarWidget from "./formSideBar";
import {
  ListWidget,
  TextAnswerWidget,
  TextInput,
} from "@/components/survey/input";
import { AddIcon } from "@chakra-ui/icons";
import { SurveyValues } from "@/global/values";
import { ContentTypes, TextBoxTypes } from "@/global/enum";
import { SurveyFunctions } from "@/global/functions";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { SurveyStrings } from "@/global/string";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
type FormType = {
  name: string;
  active?: boolean;
  onFocus: () => void;
  addQuestion: (e: any) => void;
  id: number;
  data: SurveyDetailModel;
  setQuestion: Dispatch<SetStateAction<SurveyDetailModel[]>>;
  deleteQuestion: () => void;
  duplicateQuestion: () => void;
  setRequired: (e: boolean) => void;
};

export const TextForm: FC<FormType> = ({
  name,
  active,
  onFocus,
  addQuestion,
  duplicateQuestion,
  deleteQuestion,
  id,
  data,
  setRequired,
  setQuestion,
}) => {
  const [view, setView] = useState<boolean>(false);
  const functions = new SurveyFunctions();

  return (
    <Box
      w={"full"}
      id={`textinput${id}`}
      onClick={() => {
        onFocus();
        setView(false);
      }}
      boxShadow={
        "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)"
      }
      bg={"white"}
      borderRadius={8}
      border={"1px solid white"}
      borderColor={"rgb(218,220,224)"}
      transition={"box-shadow .28s cubic-bezier(.4,0,.2,1)"}
      pos={"relative"}
      px={6}
      py={6}
    >
      {active && (
        <FormSideBarWidget
          addQuestion={(e) => {
            setView(false);
            addQuestion(e);
          }}
        />
      )}
      {active && (
        <Box
          pos={"absolute"}
          left={"-1px"}
          w={1.5}
          bottom={"-1px"}
          borderBottomLeftRadius={8}
          borderTopLeftRadius={8}
          style={{
            height: "calc(100% + 2px)",
          }}
          zIndex={5}
          bg={"prime"}
        />
      )}
      <HStack w={"full"} gap={4}>
        <TextInput
          onChange={(e) => {
            data.question = e;
            setQuestion((prev) => [...prev]);
          }}
          value={data.question ?? ""}
          name={name}
          focus={active}
          active={active}
        />
        <Box
          w={"full"}
          maxW={220}
          cursor={"pointer"}
          pos={"relative"}
          onClick={() => {}}
        >
          {!view && (
            <Button
              variant="default"
              textTransform={"none"}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setView(true);
              }}
              _hover={{
                bg: "none",
              }}
              border={"1px solid white"}
              borderColor={"rgb(218,220,224)"}
              borderRadius={4}
              px={4}
              py={3}
              h={"auto"}
              w={"full"}
              color={"#444"}
              textAlign={"start"}
              justifyContent={"space-between"}
            >
              <HStack>
                <Icon as={functions.inputIcon(data.type)} mr={2} />
                <Text fontSize={14}> {functions.inputText(data.type)}</Text>
              </HStack>
              <Icon as={MdOutlineArrowDropDown} />
            </Button>
          )}
          {view && (
            <Box
              w={"full"}
              pos={"absolute"}
              bg={"white"}
              zIndex={100}
              boxShadow={
                "0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)"
              }
              py={2}
            >
              {SurveyValues.inputs.map((e) => {
                return (
                  <HStack
                    bg={e.type == data.type ? "#edf4fe" : "white"}
                    w={"full"}
                    cursor={"pointer"}
                    _hover={{
                      bg: "#eee",
                    }}
                    onClick={() => {
                      setView(false);

                      data.type = e.type;
                      if (
                        e.type == TextBoxTypes.DROPDOWN &&
                        data.list![data.list!.length - 1].type ==
                          ContentTypes.OTHER
                      ) {
                        data.list!.splice(data.list!.length - 1, 1);
                      }
                      setQuestion((prev) => [...prev]);
                    }}
                    key={e.type}
                    py={3}
                    color={"#202124"}
                    px={4}
                    justifyContent={"space-between"}
                  >
                    <HStack>
                      <Icon as={e.icon} boxSize={5} color={"#202124"} mr={2} />{" "}
                      <Text fontSize={14} lineHeight={"32px"} color={"#202124"}>
                        {e.text}
                      </Text>
                    </HStack>
                  </HStack>
                );
              })}
            </Box>
          )}
        </Box>
      </HStack>
      <Box h={4} />
      {data.type == TextBoxTypes.SHORT && (
        <TextAnswerWidget text={SurveyStrings.shortAnswer} />
      )}
      {data.type == TextBoxTypes.PARAGRAPH && (
        <TextAnswerWidget text={SurveyStrings.longAnswer} />
      )}
      {(data.type == TextBoxTypes.MULTIPLE ||
        data.type == TextBoxTypes.DROPDOWN ||
        data.type == TextBoxTypes.CHECKBOX) && (
        <ListWidget
          list={data.list}
          type={data.type}
          active={active}
          add={() => {
            data.list?.push({
              content: `Option ${(data.list?.length ?? 0) + 1}`,
              type: ContentTypes.TEXT,
            });
            setQuestion((prev) => [...prev]);
          }}
          other={() => {
            if (data.list![data.list!.length - 1].type != ContentTypes.OTHER) {
              data.list?.push({
                type: ContentTypes.OTHER,
                content: `Бусад`,
              });
              setQuestion((prev) => [...prev]);
            }
          }}
          onChange={(e, i) => {
            data.list![i]!.content = e;
            setQuestion((prev) => [...prev]);
          }}
          close={(i: number) => {
            data.list?.splice(i, 1);
            setQuestion((prev) => [...prev]);
          }}
        />
      )}

      <Box h={4} />
      <HStack w={"full"} justifyContent={"end"} gap={0}>
        {/* <Button
          w={12}
          h={12}
          color={"black"}
          p={4}
          bg={"none"}
          transition={"all 0.2s ease"}
          borderRadius={100}
          _hover={{
            bg: "#f9f9f9",
          }}
          onClick={(e) => {
            e.preventDefault(), e.stopPropagation();
            duplicateQuestion();
          }}
        >
          <Icon as={HiOutlineDuplicate} boxSize={6} color={"#444"} />
        </Button> */}

        <Button
          w={12}
          h={12}
          color={"black"}
          p={4}
          bg={"none"}
          transition={"all 0.2s ease"}
          borderRadius={100}
          _hover={{
            bg: "#f9f9f9",
          }}
          onClick={deleteQuestion}
        >
          <Icon as={RiDeleteBin6Line} boxSize={6} color={"#444"} />
        </Button>

        <Box h={10} bg={"#444"} mx={4} w={"1px"} />
        <FormControl
          display="flex"
          alignItems="center"
          w="auto"
          // onChange={(e) => console.log(e)}
        >
          <FormLabel htmlFor="email-alerts" mb="0">
            Required
          </FormLabel>
          <Switch
            id="email-alerts"
            colorScheme="teal"
            isChecked={data.required ?? false}
            onChange={(e) => setRequired(e.target.checked)}
          />
        </FormControl>
      </HStack>
    </Box>
  );
};

type GeneralFormType = {
  active?: boolean;
  onFocus: () => void;
  addQuestion: (e: any) => void;
  id: string;
  data: SurveyModel;
};
export const GeneralInput: FC<GeneralFormType> = ({
  active,
  onFocus,
  addQuestion,
  data,
}) => {
  return (
    <Box
      onClick={onFocus}
      w={"full"}
      boxShadow={
        "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)"
      }
      bg={"white"}
      borderRadius={8}
      border={"1px solid white"}
      borderColor={"rgb(218,220,224)"}
      transition={"box-shadow .28s cubic-bezier(.4,0,.2,1)"}
      pos={"relative"}
      px={6}
      py={6}
    >
      {active && (
        <Box
          pos={"absolute"}
          left={"-1px"}
          w={1.5}
          bottom={"-1px"}
          borderBottomLeftRadius={8}
          style={{
            height: "calc(100% - 8px)",
          }}
          zIndex={5}
          bg={"prime"}
        />
      )}
      {active && <FormSideBarWidget addQuestion={addQuestion} />}
      <Box
        pos={"absolute"}
        left={"-1px"}
        top={"-1px"}
        height={2.5}
        borderTopRadius={8}
        style={{
          width: "calc(100% + 2px)",
        }}
        zIndex={6}
        bg={"purple"}
      />

      <Box h={2} />
      <TextInput
        fs={24}
        value={data.title ?? ""}
        name="title"
        focus={active}
        active={active}
        onChange={(e) => {}}
        general={true}
      />
      <Box h={2} />

      <TextInput
        onChange={(e) => {}}
        general={true}
        value={data.content?.content ?? ""}
        active={active}
        name="content"
      />
    </Box>
  );
};

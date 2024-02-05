import { SurveyStrings } from "@/global/string";
import { Box, Button, Icon, Tooltip, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
type SideBard = {
  addQuestion: (e: any) => void;
};
const FormSideBarWidget: FC<SideBard> = ({ addQuestion }) => {
  return (
    <Box
      pos={"absolute"}
      top={0}
      right={"-3%"}
      transform={"translateX(100%)"}
      bg={"white"}
      borderRadius={8}
      py={1.5}
   
      width={10}
      boxShadow={
        "0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)"
      }
      border={"1px solid white"}
      borderColor={"rgb(218,220,224)"}
      transition={"box-shadow .28s cubic-bezier(.4,0,.2,1)"}
    >
      <VStack w={"full"} pos={"relative"}>
        <Tooltip label={SurveyStrings.addQuestion} placement="right">
          <Button onClick={(e) => addQuestion(e)} p={0} py={0.5} variant={"default"}>
            <Icon as={IoIosAddCircleOutline} w={9} h={9} />
          </Button>
        </Tooltip>
      </VStack>
    </Box>
  );
};

export default FormSideBarWidget;

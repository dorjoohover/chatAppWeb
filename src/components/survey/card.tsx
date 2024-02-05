import { DateFormat } from "@/global/functions";
import { SurveyModel } from "@/models/Survey.model";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaListUl } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import { CheckIcon } from "@chakra-ui/icons";
import { SurveyValues } from "@/global/values";
import { useState } from "react";

export const GridCard = ({ data }: { data: SurveyModel }) => {
  const format = new DateFormat();
  const [menu, setMenu] = useState<boolean>(false);
  
  return (
    <Link href={`/survey/${data._id}`} onClick={() => setMenu(false)}>
      <Card maxW="sm">
        <CardBody padding={0}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
          />
        </CardBody>
        <Divider />
        <CardFooter padding={"16px 8px 14px 16px"}>
          <Stack spacing="3" w={"full"}>
            <Heading size="md">{data?.title ?? ""}</Heading>

            <HStack w={"full"} justifyContent={"space-between"}>
              <HStack gap={2}>
                <Box
                  as="span"
                  color={"white"}
                  bg={"prime"}
                  borderRadius={4}
                  fontSize={14}
                  p={1}
                >
                  <FaListUl />
                </Box>
                <Text variant={"normal"} fontSize={12}>
                  Modified {format.meridiem(data.updatedAt ?? "")}
                </Text>
              </HStack>
              <Menu isLazy isOpen={menu}>
                <MenuButton
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setMenu(!menu);
                  }}
                  as={Button}
                  w={"auto"}
                  h={10}
                  flex={"none"}
                  variant={"default"}
                  p={0}
                >
                  <Icon as={CiMenuKebab} boxSize={6} m={"auto"} />
                </MenuButton>
                <MenuList
                  borderRadius={4}
                  border={"none"}
                  boxShadow={
                    "0 1px 2px rgba(0,0,0,.3),0 2px 6px 2px rgba(0,0,0,.15)"
                  }
                  fontSize={14}
                >
                  {SurveyValues.cartActions.map((action) => (
                    <MenuItem
                      icon={<Icon as={action.icon} fontSize={24} />}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenu(false);
                      }}
                      key={action.type}
                    >
                      {action.text}
                    </MenuItem>
                  ))}
                </MenuList>
              </Menu>
            </HStack>
          </Stack>
        </CardFooter>
      </Card>
    </Link>
  );
};
export const ListCard = ({ data }: { data: SurveyModel }) => {
  const format = new DateFormat();
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <Link
      href={`/survey/${data._id}`}
      className="w-full"
      onClick={() => setMenu(false)}
    >
      <HStack
        w="full"
        _hover={{
          bg: "#f3e8fd",
        }}
        px={4}
        borderRadius={50}
        py={2}
      >
        <HStack gap={2} w="45%">
          <Box
            as="span"
            color={"white"}
            bg={"prime"}
            borderRadius={4}
            fontSize={14}
            p={1}
          >
            <FaListUl />
          </Box>

          <Text variant={"normal"}>{data?.title ?? ""}</Text>
        </HStack>
        <HStack
          w="full"
          justifyContent={"end"}
          gap={10}
          mr={{
            md: 20,
            base: 4,
          }}
        >
          <Text variant={"normal"}>
            {format.meridiem(data.updatedAt ?? "")}
          </Text>
        </HStack>
        <Menu isLazy isOpen={menu}>
          <MenuButton
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMenu(!menu);
            }}
            as={Button}
            w={"auto"}
            h={10}
            variant={"default"}
            p={0}
          >
            <Icon as={CiMenuKebab} m={"auto"} />
          </MenuButton>
          <MenuList
            borderRadius={4}
            border={"none"}
            boxShadow={"0 1px 2px rgba(0,0,0,.3),0 2px 6px 2px rgba(0,0,0,.15)"}
            fontSize={14}
          >
            {SurveyValues.cartActions.map((action) => (
              <MenuItem
                icon={<Icon as={action.icon} fontSize={24} />}
                onClick={(e) => {
                  e.preventDefault();
                  setMenu(false);
                }}
                key={action.type}
              >
                {action.text}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Link>
  );
};

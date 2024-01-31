"use client";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth/cordova";
import { SurveyValues, api } from "@/global/values";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  HStack,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import CustomButton from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SurveySortTypes, SurveyTypes, ViewTypes } from "@/global/enum";
import { BiGridHorizontal, BiListUl } from "react-icons/bi";
import { FC, useEffect, useState } from "react";
import { SurveyModel } from "@/models/Survey.model";
import { SurveyStrings } from "@/global/string";
import { MdOutlineSortByAlpha } from "react-icons/md";
import { CheckIcon } from "@chakra-ui/icons";
import { SurveyFunctions } from "@/global/functions";
import { GridCard, ListCard } from "@/components/survey/card";

// async function signIn() {
//   await signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential?.accessToken;
//       console.log(token);
//       const user = result.user;
//       console.log(user);
//       // IdP data available using getAdditionalUserInfo(result)
//       // ...
//     })
//     .catch((error) => {
//       console.log(error);
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
//   const res = login();
//   return res;
// }

async function getDataBySort(
  type: SurveySortTypes
): Promise<Array<SurveyModel>> {
  ("use server");
  try {
    let res = await fetch(`/api/survey/${type}`, {}).then(
      async (d) => await d.json()
    );

    return res as Array<SurveyModel>;
  } catch (error) {
    console.log(error);
    throw new Error(`${JSON.stringify(error)}`);
  }
}

async function createForm(): Promise<SurveyModel> {
  ("use server");
  try {
    let res = await fetch(`/api/survey`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: SurveyTypes.QUESTION }),
    }).then(async (d) => await d.json());

    return res;
  } catch (error) {
    console.log(error);
    throw new Error(`${JSON.stringify(error)}`);
  }
}

export default function Page() {
  const router = useRouter();
  const [view, setView] = useState<ViewTypes>(ViewTypes.GRID);
  const [sort, setSort] = useState<SurveySortTypes>(SurveySortTypes.LASTOPENED);
  const [data, setData] = useState<Array<SurveyModel>>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoading, setDataLoading] = useState<boolean>(true);
  const create = async () => {
    setLoading(true);
    await createForm()
      .then((d) => {
        router.push(`/survey/${d._id}`);
      })
      .finally(() => setLoading(false))
      .catch((err) => console.log(err));
  };
  const getData = async () => {
    setDataLoading(true);
    await getDataBySort(sort)
      .then((d) => {
        setData(d);
      })
      .finally(() => setDataLoading(false));
  };
  useEffect(() => {
    getData();
  }, [sort]);
  const functions = new SurveyFunctions();
  return (
    <Box>
      <Button
        variant={"default"}
        disabled={loading}
        spinner={<Spinner />}
        isLoading={loading}
        onClick={create}
      >
        Blank
      </Button>
      <HStack w={"full"} justifyContent={"space-between"}>
        <Box w={view == ViewTypes.LIST ? "45%" : "auto"}>
          <Text variant={"normal"} px={4} whiteSpace={"nowrap"}>
            {functions.surveySortTypeName(sort)}
          </Text>{" "}
        </Box>
        <HStack
          w={"full"}
          justifyContent={"end"}
          gap={10}
          mr={{
            md: 10,
            base: 4,
          }}
        >
          {view == ViewTypes.LIST && (
            <Text variant={"normal"} px={4}>
              {SurveyStrings.lastModified}
            </Text>
          )}
        </HStack>
        {/* view */}
        <Button
          variant={"default"}
          onClick={() =>
            setView(view == ViewTypes.GRID ? ViewTypes.LIST : ViewTypes.GRID)
          }
        >
          {view != ViewTypes.GRID ? <BiGridHorizontal /> : <BiListUl />}
        </Button>
        {/* sorting */}
        <Menu>
          <MenuButton as={Button} variant={"default"}>
            <Icon as={MdOutlineSortByAlpha} m={"auto"} />
          </MenuButton>
          <MenuList
            borderRadius={4}
            border={"none"}
            boxShadow={"0 1px 2px rgba(0,0,0,.3),0 2px 6px 2px rgba(0,0,0,.15)"}
            fontSize={14}
          >
            {SurveyValues.sorting.map((s) => {
              return (
                <MenuItem
                  icon={
                    <CheckIcon
                      visibility={sort == s.type ? "visible" : "hidden"}
                    />
                  }
                  onClick={() => setSort(s.type)}
                  key={s.type}
                >
                  {s.text}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </HStack>
      <Spacer h={4} />
      {dataLoading ? (
        <Center>
          <Spinner />
        </Center>
      ) : view == ViewTypes.GRID ? (
        <Grid gridTemplateColumns={"repeat(4, 1fr)"} gap={5}>
          {data.map((d) => (
            <GridItem key={d._id}>
              <GridCard data={d} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <VStack width={'full'} gap={3}>
          {data.map((d) => (
            <ListCard key={d._id} data={d} />
          ))}
        </VStack>
      )}
    </Box>
  );
}

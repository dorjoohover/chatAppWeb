"use client";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth/cordova";
import { SurveyValues, api } from "@/global/values";
import {
  Box,
  Center,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import QuestionPage from "./question";
import { SurveyModel } from "@/models/Survey.model";
import { Suspense, useEffect, useState } from "react";
import { Loader } from "@/components/loader";
import { ErrorMessages } from "@/global/string";

async function getDataById(id: string): Promise<SurveyModel> {
  try {
    ("use server");
    const res = await fetch(`/api/survey/${id}`, {
      method: "POST",
    }).then((d) => d.json());

    return res;
  } catch (error) {
    throw new Error(ErrorMessages.occured);
  }
}
export default function Page({ params }: { params: { slug: string } }) {
  const [data, setData] = useState<SurveyModel>();
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async () => {
    setLoading(true);
    await getDataById(params.slug)
      .then((d) => setData(d))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Box>
      <Tabs variant="unstyled" align="center">
        <TabList>
          {SurveyValues.tabs.map((tab) => (
            <Tab key={tab.type}>{tab.text}</Tab>
          ))}
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            {data != undefined && <QuestionPage data={data!} />}
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <Tooltip label='Top' placement='top'>
      <Button>Top</Button>
    </Tooltip> */}
      {/* <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" /> */}

      {/* <CustomButton text="Blank" onClick={createForm} /> */}
    </Box>
  );
}

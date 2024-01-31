"use client";
import { auth, provider } from "@/firebase";
import { signInWithPopup } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth/cordova";
import { api } from "@/global/values";
import { Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack } from "@chakra-ui/react";
import CustomButton from "@/components/Button";
import { useFormState } from "react-dom";
import { addToCart } from "@/lib/action";
import { AddToCartForm } from "@/components/survey/form";

type Form = {
  title: string;
  description: string;
};

async function increment(previousState: Form, formData: any) {
  return previousState;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [message, formAction] = useFormState(addToCart, null);

  return (
    <VStack>
      <Tabs>
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
          <Tab>Three</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <AddToCartForm itemID="1" itemTitle="JavaScript: The Definitive Guide" />
      <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />

      {/* <CustomButton text="Blank" onClick={createForm} /> */}
    </VStack>
  );
}

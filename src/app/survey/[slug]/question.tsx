import { Loader } from "@/components/loader";
import { GeneralInput, TextForm } from "@/components/survey/form";
import { ContentTypes, TextBoxTypes } from "@/global/enum";
import { ActionListenType, questionSet } from "@/lib/action";
import { SurveyDetailModel, SurveyModel } from "@/models/Survey.model";
import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { useFormState } from "react-dom";

const QuestionPage = ({ data }: { data: SurveyModel }) => {
  const [formState, formAction] = useFormState(questionSet, {
    data: data,
  });

  const [questions, setQuestion] = useState<SurveyDetailModel[]>(
    data.values ?? []
  );
  const [active, setActive] = useState<number>(0);
  const scroll = () => {
    document.getElementById(`textinput${active}`)?.scrollIntoView(true);
  };

  const setData = () => {
    formState.data.values = questions;
  };

  const edit = () => {
    setData();
  };

  const addQuestion = (e: any) => {
    e.preventDefault();
    e.stopPropagation();

    setQuestion((prev) => [
      ...prev,
      {
        type: TextBoxTypes.MULTIPLE,
        id: questions.length + 1,
        required: false,
        list: [
          {
            type: ContentTypes.TEXT,
            content: "Option 1",
          },
        ],
      },
    ]);

    setActive(questions.length + 1);
    scroll();
    setData();
  };
  const deleteQuestion = (id: number) => {
    setQuestion(questions.filter((q) => q.id != id));
    setData();
  };
  const duplicateQuestion = (id: number) => {
    const copy = Object.assign({}, questions.filter((q) => q.id == id)[0]);
    copy.id = questions.length + 1;

    setActive(questions.length);
    setQuestion((prev) => [...prev, copy]);
    scroll();
    setData();
  };

  return (
    <form action={formAction}>
      {formState.type && <Text>{JSON.stringify(formState.type)}</Text>}
      <VStack gap={3} width={"full"}>
        <GeneralInput
          addQuestion={(e) => addQuestion(e)}
          onFocus={() => {
            setActive(0);
          }}
          data={data}
          id="textinput0"
          active={active == 0}
        />
        <VStack id="questions" gap={3} w={"full"}>
          {questions.map((e) => {
            return (
              <TextForm
                data={e}
                id={e.id}
                deleteQuestion={() => deleteQuestion(e.id)}
                duplicateQuestion={() => duplicateQuestion(e.id)}
                addQuestion={(event) => addQuestion(event)}
                key={e.id}
                name={`title${e.id}`}
                setQuestion={setQuestion}
                onFocus={() => {
                  setActive(e.id);
                }}
                setRequired={(required) => {
                  e.required = required;
                  setQuestion((prev) => [...prev]);
                  setData();
                }}
                active={active == e.id}
              />
            );
          })}
        </VStack>

        {/* <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} /> */}
        <button type="submit" onClick={edit}>
          Save
        </button>
        {/* {formState?.success && (
          <div className="toast">
            Added to cart! Your cart now has {formState.cartSize} items.
          </div>
        )}
        {formState?.success === false && (
          <div className="error">
            Failed to add to cart: {formState.message}
          </div>
        )} */}
      </VStack>
    </form>
  );
};

export default QuestionPage;

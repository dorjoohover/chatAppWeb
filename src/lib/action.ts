"use server";

import { ActionTypes, ContentTypes, SurveyTypes } from "@/global/enum";
import { ErrorMessages } from "@/global/string";
import { SurveyModel } from "@/models/Survey.model";


export type ActionListenType = {
  message?: string;
  type?: ActionTypes;
  data: SurveyModel;
 
};

export async function questionSet(
  prevState: ActionListenType,
  queryData: any
): Promise<ActionListenType> {
  let data = { ...prevState.data };
  const content = queryData.get("content");
  const title = queryData.get("title");

  if (content != "" && title != "") {
    data.content = {
      type: ContentTypes.TEXT,
      content: content,
    };
    data.title = title;
    try {
      await fetch(`${process.env.URL}/api/survey/${data._id}`, {
        body: JSON.stringify(data),
        method: "PUT",
      });
     

      return {
        type: ActionTypes.SUCCESS,
        message: ErrorMessages.success,
        data: data,
      };
    } catch (error) {
      console.error(error);

      return {
        type: ActionTypes.ERROR,
        message: ErrorMessages.occured,
        data: data,
      };
    }
  }

  return {
    type: ActionTypes.INFO,
    message: ErrorMessages.info,
    data: data,
  };
}

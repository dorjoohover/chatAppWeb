import { ContentTypes, SurveyTypes, TextBoxTypes } from "@/global/enum";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";

export interface ContentDetailModel {
  type: ContentTypes;

  content?: string;

  title?: string;
}
export interface SurveyDetailModel {
  type: TextBoxTypes;
  // index start 1

  id: number;

  content?: ContentDetailModel[];

  question?: string;

  list?: ContentDetailModel[];
  required: boolean
  answer?: string;
}

export interface SurveyModel {
  _id?: string;
  title?: string;

  content?: ContentDetailModel;

  values?: SurveyDetailModel[];

  type: SurveyTypes;

  parent?: string;

  created: string;
  user?: string;

  createdAt?: string;
  updatedAt?: string
}

type Survey<T = Response> = (body?: SurveyModel) => T;
export interface SurveyResponse extends NextApiResponse {
  json: Survey<this>;
}

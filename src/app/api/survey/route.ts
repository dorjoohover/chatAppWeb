import { SurveyTypes } from "@/global/enum";
import { api } from "@/global/values";
import { SurveyModel } from "@/models/Survey.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token");
    const res = await fetch(`${api}survey/user`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA2NjgxNzE3LCJleHAiOjE3MDcyODY1MTd9.N9ymjz1SNBjAZwCZ6ddlMv9Hl_PCMRhsMhtjM7lqI8c"}`,
      },
    });
    return NextResponse.json(res, { status: 200 });
  } catch (error) {}
};
export const POST = async (req: NextRequest) => {
  try {
    const token = req.cookies.get("token");

    const body = await req.json();
    const res = await fetch(`${api}survey`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA2NjgxNzE3LCJleHAiOjE3MDcyODY1MTd9.N9ymjz1SNBjAZwCZ6ddlMv9Hl_PCMRhsMhtjM7lqI8c"}`,
      },
    }).then((d) => d.json());

    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.log(error);
  }
};

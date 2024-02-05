import { api } from "@/global/values";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;
    const token = req.cookies.get("token");

    const survies = await fetch(`${api}survey/user/${slug}`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA3MTEwNDY0LCJleHAiOjE3MDc3MTUyNjR9.E_qjer9oeI0rZuMrwwnnNOj6qJWsGgG2Ym8OYMc2vD0"}`,
      },
    }).then((d) => d.json());
    return NextResponse.json(survies);
  } catch (error) {}
};

export const POST = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;

    const token = req.cookies.get("token");

    const survies = await fetch(`${api}survey/get/${slug}`, {
      headers: {
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA3MTEwNDY0LCJleHAiOjE3MDc3MTUyNjR9.E_qjer9oeI0rZuMrwwnnNOj6qJWsGgG2Ym8OYMc2vD0"}`,
      },
    }).then((d) => d.json());
    return NextResponse.json(survies);
  } catch (error) {}
};
export const PUT = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;

    const token = req.cookies.get("token");
    const body = await req.json();
    console.log(body);
    const res = await fetch(`${api}survey/edit/${slug}`, {
      method: "PUT",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA3MTEwNDY0LCJleHAiOjE3MDc3MTUyNjR9.E_qjer9oeI0rZuMrwwnnNOj6qJWsGgG2Ym8OYMc2vD0"}`,
      },
    }).then((d) => d.json());
    return NextResponse.json(res, { status: 201 });
  } catch (error) {}
};
export const DELETE = async (
  req: NextRequest,
  { params }: { params: { slug: string } }
) => {
  try {
    const { slug } = params;

    const token = req.cookies.get("token");
    const body = await req.json();
    console.log(body);
    const res = await fetch(`${api}survey/${slug}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA3MTEwNDY0LCJleHAiOjE3MDc3MTUyNjR9.E_qjer9oeI0rZuMrwwnnNOj6qJWsGgG2Ym8OYMc2vD0"}`,
      },
    }).then((d) => d.json());
    return NextResponse.json(res, { status: 201 });
  } catch (error) {}
};

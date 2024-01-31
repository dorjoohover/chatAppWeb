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
        Authorization: `Bearer ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImIyMGZhMTcwOUB1ZmUuZWR1Lm1uIiwiaWF0IjoxNzA2NjgxNzE3LCJleHAiOjE3MDcyODY1MTd9.N9ymjz1SNBjAZwCZ6ddlMv9Hl_PCMRhsMhtjM7lqI8c"}`,
      },
    }).then((d) => d.json());
    return NextResponse.json(survies);
  } catch (error) {}
};

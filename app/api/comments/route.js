import comments from "@/app/data/comments";
import { NextResponse } from "next/server";

export async function GET(request) {
   return NextResponse.json(comments)
}
export async function POST(request) {
    const comment = await request.json();
    const newComments = {
        id: comments.length + 1,
        text:comment.text
    }
    comments.push(newComments);
    return NextResponse.json(comments);
}
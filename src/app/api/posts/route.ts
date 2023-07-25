import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/firebase";
import Post from "@/types/Post";
import { isPostValid } from "@/services/posts.server";
import revalidate from "@/services/revalidate";

//POST /api/posts
export async function POST(request: NextRequest) {
    const post: Post = await request.json();

    if(!(isPostValid(post))) {
        return new NextResponse("Bad Request", { status: 400 })
    }

    try {
        await firestore.collection("posts").doc().set({
            ...post,
        });
        await revalidate(['/posts']);
        console.log("Post added successfully");
        return NextResponse.json({ message: "Post added successfully" });
    } catch (error) {
        console.error("adding post: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}
import Link from "next/link";
import { getPost } from "@/services/posts.server";
import PostAction from "@/components/PostActions";

interface PostView {
    params: {
        postId: string;
    }
}
export const dynamic = "force-static";

export function generateMetadata(props: PostView) {
    return {
        title: `Post ${props.params.postId}`,
        description: `Post ${props.params.postId}`,
    }
}

export function generateStaticParams() {
    return [{postId: "2"}, {postId: "4"}, {postId: "12"},]
}

export default async function PostViewPage(props: PostView) {
    const { postId } = props.params;
    const {title, body, updatedBy, updatedAt} = await getPost(postId);
    const updatedAtFormatted = updatedAt.toDate().toLocaleString("en-GB");
    return (
        <>
            <header className="flex items-center mb-6">
                <div>
                    <h1>{title}</h1>
                    <div className="text-sm">{updatedBy?.name} {updatedAtFormatted}</div>
                </div>
                <PostAction postId={postId}/>
            </header>
            <p>{body}</p>
        </>
    )
}
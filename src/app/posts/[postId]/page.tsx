import Link from "next/link";
import { getPost } from "@/services/posts";

interface PostView {
    params: {
        postId: string;
    }
}

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
    const {title, body} = await getPost(postId);
    return (
        <>
            <header className="flex items-center mb-6">
                <h1>{title}</h1>
                <div className="ml-auto">
                    <Link className="btn" href={`/posts/${postId}/edit`}>Edit</Link>
                    <button className="btnRed">Delete</button>
                </div>
            </header>
            <p>{body}</p>
        </>
    )
}
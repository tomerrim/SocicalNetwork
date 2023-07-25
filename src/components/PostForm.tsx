'use client'

import { useState } from "react"
import { savePost } from "@/services/posts";
import { useRouter } from "next/navigation";

interface PostFormProps {
    postId?: string;
    title?: string;
    body?: string;
}

export default function PostForm(props: PostFormProps) {
    const [title, setTitle] = useState<string>(props?.title || "");
    const [body, setBody] = useState<string>(props?.body || "");
    const { push } = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        await savePost({id: props.postId, title, body});
        alert("Post saved successfully");
        push("/posts");
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="postFormBlock">
                <label className="psotFormLabel">Title</label>
                <input className="postFormInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
            </div>
            <div className="mb4">
                <label className="font-medium text-gray-900 block mb-2">Body</label>
                <textarea className="postFormInput" rows={20} value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"/>
            </div>
            <button type="submit" className="btn">Send</button>
        </form>
    )
}
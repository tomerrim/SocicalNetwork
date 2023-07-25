'use client'

import { useState } from "react"
import { savePost } from "@/services/posts";

interface PostFormProps {
    postId: string;
}

export default function PostForm(props: PostFormProps) {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        await savePost({id: props.postId, title, body});
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
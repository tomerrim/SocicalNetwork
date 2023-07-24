'use client'

import { useState } from "react"

export default function PostForm() {
    const [title, setTitle] = useState<string>("");
    const [body, setBody] = useState<string>("");
    return (
        <form>
            <div className="postFormBlock">
                <label className="psotFormLabel">Title</label>
                <input className="postFormInput" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"/>
            </div>
            <div className="mb4">
                <label className="font-medium text-gray-900 block mb-2">Body</label>
                <input className="postFormInput" type="text" value={body} onChange={(e) => setBody(e.target.value)} placeholder="Body"/>
            </div>
            <button type="submit" className="postFormButton">Send</button>
        </form>
    )
}
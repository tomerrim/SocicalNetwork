import Link from "next/link";

const POST = Array.from({length: 10});

export default function PostsPage() {
    return (
        <>
            <header className="flex items-center mb-6">
                <h1>Posts Page</h1>
                <Link href="/posts/new" className="btn ml-auto">New Post</Link>
            </header>
            <ul>
                {POST.map((post, index) => (
                    <li key={index}>
                        <Link href={`/posts/${index}`}>Post {index}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}
import Link from "next/link";
import PostCard from "@/components/PostCard";

const POST = Array.from({length: 30});

export default function PostsPage() {
    return (
        <>
            <header className="flex items-center mb-6">
                <h1>Posts Page</h1>
                <Link href="/posts/new" className="btn ml-auto">New Post</Link>
            </header>
            <ul className="grid grid-cols-3 gap-3">
                {POST.map((post, index) => (
                    <PostCard key={index} postId={index.toString()}/>
                ))}
            </ul>
        </>
    )
}
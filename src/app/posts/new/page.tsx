import PostForm from "@/components/PostForm";

export const dynamic = "force-static";

export const metadata = {
  title: 'New Post',
  description: 'New Post Page Generated by Next.js',
}

export default function NewPostPage() {
    return (
        <>
            <header>
                <h1>New Post Page</h1>
            </header>
            <PostForm/>
        </>
    )
}
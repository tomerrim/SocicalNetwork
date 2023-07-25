import Post from "@/types/Post";

const BASE_URL = "http://localhost:3000/api/posts";

export async function getPosts() {
    const response = await fetch(BASE_URL, {
        next: { revalidate: 3 },
    });
    const data = await response.json();
    return data.posts;
}

export async function getPost(postId: string) {
    const response = await fetch(`${BASE_URL}/${postId}`, {
        next: { revalidate: 3 },
    });
    const data = await response.json();
    return data;
}

export async function savePost(post: Post) {
    try {
        const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });

    if (!response.ok) {
        alert("Network response was not OK");
    }

    return response.json();
    } catch (error) {
        console.log(error)
        alert("ERROR")
    }
}
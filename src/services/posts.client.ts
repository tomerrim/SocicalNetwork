import Post from "@/types/Post";

const BASE_URL = "http://localhost:3000/api/posts";

export async function savePost(post: Post) {
    try {
        const method = post?.id ? "PUT" : "POST";
        const response = await fetch(`${BASE_URL}/${post?.id || ""}`, {
        method,
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

export async function deletePost(postId: string) {
    try {
        const response = await fetch(`${BASE_URL}/${postId}`, {
        method: "DELETE",
    });

    if(!response.ok) {
        alert("Network response was not OK");
    }

    return response.json();
    } catch (error) {
        console.error(error);
        alert("ERROR");
    }
}
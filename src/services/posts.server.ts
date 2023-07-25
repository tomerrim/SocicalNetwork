import { firestore } from "@/firebase";
import Post from "@/types/Post";
import { redirect } from "next/navigation";

const BASE_URL = "http://localhost:3000/api/posts";

export async function getPosts() {
    const snapshot: FirebaseFirestore.QuerySnapshot = await firestore.collection("posts").orderBy("updatedAt", "desc").get();
    const posts: Post[] = snapshot.docs.map((doc) => {
        const { title, body } = doc.data();
        return {
            id: doc.id,
            title,
            body
        }
    })
    return posts;
}

export async function getPost(postId: string) {
    const document: FirebaseFirestore.DocumentSnapshot = await firestore.collection("posts").doc(postId).get();
    const data = document.data();

    if(!(document.exists && data)) {
        redirect("/posts");
    }
    
    return {
        id: document.id,
        title: data.title,
        body: data.body,
        updatedBy: data.updatedBy,
        updatedAt: data.updatedAt
    }
}

export function isPostValid(post: Post) {
    return (post.title && post.body && post.title.length > 3 && post.body.length > 3);
}

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
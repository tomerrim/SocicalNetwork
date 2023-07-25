"use client"

import { signIn } from "next-auth/react";

export default function SignInPage() {

    function handleSignIn() {
        signIn("google");
    }

    return (
        <>
            <h1>Sign In</h1>
            <button className="btn" onClick={handleSignIn}>Sign In With Google</button>
        </>
    )
}
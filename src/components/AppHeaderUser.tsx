"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function AppHeaderUser () {
    const { data: session } = useSession();

    function handleSignout() {
        signOut();
    }

    return (
        <div className="ml-auto flex gap-4">
            { session ? (
                <>
                    <span className="text-white">{session?.user?.name}</span>
                    <button className="signoutBtn" onClick={handleSignout}>Sign Out</button>
                </>
            ) : (
                <Link href="/signin" className="signinBtn">Sign In</Link>
            )}
            
        </div>
    )
}
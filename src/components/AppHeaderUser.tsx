"use client"

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import RestrictedContent from "./RestrictedContent";

export default function AppHeaderUser () {
    const { data: session } = useSession();

    function handleSignout() {
        signOut();
    }

    function fallback() {
        return <Link href="/signin" className="signinBtn">Sign In</Link>
    }

    return (
        <div className="ml-auto flex gap-4">
            <RestrictedContent fallback={fallback()}>
                <span className="text-white">{session?.user?.name}</span>
                <button className="signoutBtn" onClick={handleSignout}>Sign Out</button>
            </RestrictedContent>
        </div>
    )
}
"use client"

import { Session } from "next-auth";
import { SessionProvider as Provideer } from "next-auth/react";

interface SessionProviderProps {
    children: React.ReactNode;
    session: Session | null;
}

export default function SessionProvider({ children, session }: SessionProviderProps) {
    return (
        <Provideer>
            {children}
        </Provideer>
    )
}
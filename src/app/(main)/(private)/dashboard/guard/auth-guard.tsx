"use client";

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthGuard({ children }: { children: React.ReactNode }) {

    const { data, status } = useSession();

    const router = useRouter();

    console.log(data, status);

    useEffect(() => {

        if (status === "unauthenticated") {
            router.push("/home")
        };

    }, [status, router]);

    if (status === "authenticated") {

        return (
            <>{children}</>
        );
    };

    // if (status === "loading") {

    //     return (
    //         <h1>Cargando ...</h1>
    //     );
    // };
};
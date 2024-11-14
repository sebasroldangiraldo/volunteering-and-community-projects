import AuthGuard from "./dashboard/guard/auth-guard";

export default function PrivateLayout({ children }: { children: React.ReactNode }) {

    return (
        <AuthGuard>
            {children}
        </AuthGuard>
    );
};
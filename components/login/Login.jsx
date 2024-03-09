"use client";
import { useSession, signOut, signIn, SessionProvider } from "next-auth/react";
function Login() {
  const { data: session, status } = useSession();

  if (session && session.user) {
    return (
      <div className="mt-28">
        <button
          onClick={() => {
            signOut({ callbackUrl: "/" });
          }}
        >
          Log out
        </button>
      </div>
    );
  }
  return (
    <div>
      <button
        onClick={() => {
          signIn({ callbackUrl: "/" });
        }}
      >
        Log in
      </button>
    </div>
  );
}

export default function Providers() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}

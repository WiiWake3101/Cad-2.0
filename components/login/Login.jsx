"use client";
import { useSession, signOut, signIn, SessionProvider } from "next-auth/react";
import "./login.css";
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
    <section className="container forms">
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form>
            <div className="field input-field">
              <input type="email" placeholder="Email" className="input" />
            </div>
            <div className="field input-field">
              <input
                type="password"
                placeholder="Password"
                className="password"
              />
              <i className="bx bx-hide eye-icon"></i>
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">
                Forgot password?
              </a>
            </div>
            <div className="field button-field">
              <button>Login</button>
            </div>
          </form>
          <div className="form-link">
            <span>
              Don't have an account?{" "}
              <a href="/signup" className="link signup-link">
                Signup
              </a>
            </span>
          </div>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field google" onClick={() => signIn()}>
            <img src="#" alt="" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}

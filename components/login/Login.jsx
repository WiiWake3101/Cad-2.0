"use client";
import { useSession, signOut, signIn, SessionProvider } from "next-auth/react";
import "./login.css";

function Login() {
  const { data: session, status } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/" });
  };

  if (session && session.user) {
    return (
      <main>
        <section className="container forms">
          <div className="form login">
            <div className="form-content">
              <header>
                Logged in as{" "}
                <strong style={{ fontWeight: "bold" }}>
                  {session.user.name}
                </strong>
              </header>

              <div className="field button-field">
                <button onClick={handleLogout}>Log out</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
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
            <a
              href="#"
              className="field google"
              onClick={() => signIn("google", { callbackUrl: "/" })}
            >
              <img
                src="https://authjs.dev/img/providers/google.svg"
                alt=""
                className="google-img"
              />
              <span>Login with Google</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function LoginPage() {
  return (
    <SessionProvider>
      <Login />
    </SessionProvider>
  );
}

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Auth.module.css";

function Auth() {
  const [isSignup, setIsSignup] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    // Check password confirmation during signup
    if (isSignup && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const endpoint = isSignup
        ? "http://localhost:5000/api/auth/signup"
        : "http://localhost:5000/api/auth/login";

      const body = isSignup
        ? {
            name,
            email,
            password,
          }
        : {
            email,
            password,
          };

      const response = await fetch(endpoint, {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      // Save login token
      if (!isSignup && data.token) {
        localStorage.setItem("interaToken", data.token);
        localStorage.setItem(
          "interaUser",
          JSON.stringify(data.user)
        );
      }

      // After signup, show login
      if (isSignup) {
        setIsSignup(false);

        setName("");
        setPassword("");
        setConfirmPassword("");

        alert("Account created successfully. Please login.");

        return;
      }

      // After login
      navigate("/upload-resume");

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const switchMode = () => {
    setIsSignup(!isSignup);

    setError("");

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className={styles.page}>

      {/* LOGO */}

      <Link to="/" className={styles.logo}>
        <span>I</span>
        INTERA
      </Link>

      {/* AUTH CARD */}

      <div className={styles.card}>

        <div className={styles.heading}>

          <h1>
            {isSignup
              ? "Create your account"
              : "Welcome back"}
          </h1>

          <p>
            {isSignup
              ? "Start preparing for your next interview."
              : "Continue your interview preparation."}
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          {/* NAME */}

          {isSignup && (
            <div className={styles.field}>

              <label>Full Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

            </div>
          )}

          {/* EMAIL */}

          <div className={styles.field}>

            <label>Email</label>

            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          {/* PASSWORD */}

          <div className={styles.field}>

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />

          </div>

          {/* CONFIRM PASSWORD */}

          {isSignup && (
            <div className={styles.field}>

              <label>Confirm Password</label>

              <input
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) =>
                  setConfirmPassword(e.target.value)
                }
                minLength={6}
                required
              />

            </div>
          )}

          {/* FORGOT PASSWORD */}

          {!isSignup && (
            <div className={styles.forgot}>
              <a href="#forgot">
                Forgot password?
              </a>
            </div>
          )}

          {/* ERROR */}

          {error && (
            <div className={styles.error}>
              {error}
            </div>
          )}

          {/* SUBMIT */}

          <button
            type="submit"
            className={styles.submit}
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create Account"
                : "Login"}
          </button>

        </form>

        {/* DIVIDER */}

        <div className={styles.divider}>
          <span>OR</span>
        </div>

        {/* SWITCH */}

        <p className={styles.switchText}>

          {isSignup
            ? "Already have an account?"
            : "Don't have an account?"}

          <button
            type="button"
            onClick={switchMode}
          >
            {isSignup ? " Login" : " Sign Up"}
          </button>

        </p>

      </div>

    </div>
  );
}

export default Auth;
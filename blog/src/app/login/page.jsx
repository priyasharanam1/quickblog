'use client';
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import styles from './loginPage.module.css';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear the previous error before making the new request

    try {
      const response = await axios.post(`/api/v1/users/login`, { email, password });

      if (response.status === 200) {
        console.log('success login');
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Login</h1>

        {status === "authenticated" ? (
          <div>
            <p>You are already logged in.</p>
            <span className={styles.link} onClick={() => signOut()}>
              Logout
            </span>
          </div>
        ) : (
          <>
            {error && <p className={styles.error}>{error}</p>}
            <form className={styles.loginForm} onSubmit={handleSubmit}>
              <div>
                <label className={styles.label} htmlFor="email">Email</label>
                <input className={styles.input}
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  required
                />
              </div>
              <div>
                <label className={styles.label} htmlFor="password">Password</label>
                <input
                  className={styles.input}
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <button className={styles.btn} type="submit">Login</button>
            </form>
          </>
        )}

        {/* Link back to homepage */}
        <Link href="/" className={styles.link}>
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}

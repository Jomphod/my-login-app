"use client"; // This is a client component
import { useState } from 'react';
import styles  from './styles/page.module.css'


export default function Home() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    // Simulate a simple authentication logic
    if (username === 'user' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };
  return (
    <div className={styles.container}>
    {isLoggedIn ? (
      <div>
        <p>Welcome, {username}!</p>
      </div>
    ) : (
      <div className={styles.formContainer}>
        <label>
          Username:
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <div style={{marginTop: 16}}>
        <label>
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        </div>
        
        <br />
        <button id="login-btn" onClick={handleLogin}>Login</button>
      </div>
    )}
  </div>
  )
}

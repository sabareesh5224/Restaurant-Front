
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }
    // console.log('Email:', email, 'Password:', password);
    setError('');
    axios.post("http://localhost:8000/login", { email, pass: password })
      .then((res) => {
        console.log("Login successful:", res.data.message);
        alert("Login success...");  
        window.location.href = "/";
      })
      .catch((err) => {
        console.error(`Login error: ${err.response.data.message}`);
        alert(err.response.data.message);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">SignUp</Link>
      </p>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, user } = useUser();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  if (user) {
    navigate("/profile");
    return null;
  }

  const getUsers = () => {
    const saved = localStorage.getItem("registeredUsers");
    return saved ? JSON.parse(saved) : [];
  };

  const saveUsers = (users) => {
    localStorage.setItem("registeredUsers", JSON.stringify(users));
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;

    if (!email || !password || (isRegister && !name)) {
      setError("Please fill in all fields.");
      return;
    }

    const users = getUsers();

    if (isRegister) {
      // Check if email already registered
      const exists = users.find((u) => u.email === email);
      if (exists) {
        setError("An account with this email already exists.");
        return;
      }
      // Save new user
      const newUser = { name, email, password };
      saveUsers([...users, newUser]);
      login({ name, email });
      navigate("/profile");

    } else {
      // Validate credentials
      const match = users.find((u) => u.email === email && u.password === password);
      if (!match) {
        setError("Incorrect email or password.");
        return;
      }
      login({ name: match.name, email: match.email });
      navigate("/profile");
    }
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <h1 className="auth-title">♟ {isRegister ? "Join the Academy" : "Welcome Back"}</h1>
        <p className="auth-subtitle">
          {isRegister ? "Create your account to start learning." : "Sign in to continue your training."}
        </p>

        {error && <p className="error-message">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          {isRegister && (
            <div className="form-group">
              <label>Full Name</label>
              <input name="name" type="text" placeholder="Arman Bekov" value={form.name} onChange={handleChange} />
            </div>
          )}
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" value={form.password} onChange={handleChange} />
          </div>
          <button type="submit" className="auth-btn">
            {isRegister ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="auth-switch">
          {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="auth-switch-btn" onClick={() => { setIsRegister(!isRegister); setError(""); }}>
            {isRegister ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
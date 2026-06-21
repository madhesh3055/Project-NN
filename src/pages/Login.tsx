import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      navigate("/home");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>NeighbourNet</h1>
        <p>Connect with your community</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>
        </form>

        <p>Forgot Password?</p>
      </div>
    </div>
  );
}

export default Login;
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // const token = localStorage.getItem("token");
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      return setError("All fields are required");
    }
    if (!form.email.includes("@")) {
      return setError("Please enter a valid email");
    }
    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }
    


    try {
      setLoading(true);
      await login(form);
      navigate('/dashboard');
      console.log('login successful');
    } catch (error) {
      setError("invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })} />

      <input
        placeholder="Password"
        type="password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })} />

      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>

    </form>
  );
};

export default Login;

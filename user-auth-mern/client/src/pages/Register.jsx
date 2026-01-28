import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submitHandler = async (e) => {
    e.preventDefault();
    await register(form);
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register</h2>
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button>Register</button>
    </form>
  );
};

export default Register;

import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("http://localhost:4000/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", data.token);
      navigate("/users")

    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{textAlign:"center"}}>Welcome Back</h2>
        <form onSubmit={submitHandler} style={styles.form}>
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            style={styles.input}
          />
          <button style={styles.btn}>Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Sign up</Link></p>
      </div>
    </div>
  );
}

const styles = {
  container:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"100vh",
    background:"#f0f2f5"
  },
  card:{
    width:"350px",
    background:"#fff",
    padding:"30px",
    borderRadius:"10px",
    boxShadow:"0 0 10px rgba(0,0,0,0.1)"
  },
  form:{ display:"flex", flexDirection:"column", gap:"10px"},
  input:{padding:"12px", border:"1px solid #ccc", borderRadius:"6px"},
  btn:{padding:"12px", background:"#25D366", color:"#fff", borderRadius:"6px", border:"none", fontWeight:"bold"}
}

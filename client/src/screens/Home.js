import { Link } from "react-router-dom";

export default function Home(){

  return(
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={{textAlign:"center"}}>Chat App</h1>
        <p style={{textAlign:"center", marginBottom:20}}>Welcome, choose an option</p>

        <Link to="/login">
          <button style={styles.btn}>Login</button>
        </Link>

        <Link to="/register">
          <button style={{...styles.btn, background:"#128C7E"}}>Register</button>
        </Link>
      </div>
    </div>
  )
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
    boxShadow:"0 0 10px rgba(0,0,0,0.1)",
    display:"flex",
    flexDirection:"column",
    gap:"10px"
  },
  btn:{
    width:"100%",
    padding:"12px",
    background:"#25D366",
    border:"none",
    borderRadius:"6px",
    color:"#fff",
    fontWeight:"bold",
    fontSize:"16px",
    cursor:"pointer"
  }
}

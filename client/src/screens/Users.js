import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    const token = localStorage.getItem("token");

    axios.get("http://localhost:4000/users",{
      headers:{ Authorization: "Bearer "+token }
    })
    .then(res=>setUsers(res.data))
    .catch(err=>console.log(err));

  },[])

  return(
    <div style={{padding:"20px"}}>
      <h2>Users</h2>
      {users.map(u=>(
        <Link key={u._id} to={`/chat/${u._id}`}>
          <div style={{padding:"10px",borderBottom:"1px solid #ddd"}}>
            {u.name}
          </div>
        </Link>
      ))}
    </div>
  )
}

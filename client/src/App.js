import { Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Chat from "./screens/Chat";
import Users from "./screens/Users";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat/:id" element={<Chat />} />
      <Route path="/users" element={<Users />} />

    </Routes>
  );
}

export default App;

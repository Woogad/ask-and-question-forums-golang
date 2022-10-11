import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./components/Login";
import PostDataPage from "./page/PostDataPage";
import RegisterPage from "./page/RegisterPage";
import Menu from "./components/Menu";
import axios from "axios";
import { useState, useEffect } from 'react';
function App() {
  const apiUrl = "http://localhost:8080/user"
  const [name, setName] = useState('')

  useEffect(() => {
    axios.get(`${apiUrl}`, {
      withCredentials: true
    })
      .then(res => {
        setName(res.data.name)
      })
      .catch(res => {
        console.log("Error")
      })
  }, [])
  return (
    <>
      <Menu name={name} />
      <Routes>
        <Route path="/" element={<HomePage name={name} />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="post" element={<PostDataPage />}></Route>
      </Routes>
    </>
  );
}
export default App;

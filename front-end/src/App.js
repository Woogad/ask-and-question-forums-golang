import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import PostDataPage from "./page/PostDataPage";
import RegisterPage from "./page/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Login" element={<LoginPage />}></Route>
      <Route path="/Register" element={<RegisterPage />}></Route>
      <Route path="/Post" element={<PostDataPage />}></Route>
    </Routes>
  );
}
export default App;

import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Login from "./components/Login";
import PostDataPage from "./page/PostDataPage";
import RegisterPage from "./page/RegisterPage";
import NotFoundPage from "./page/NotFoundPage";
import Menu from "./components/Menu";
import { AuthProvider } from "./components/Data/AuthContext";
import { RequAuth, NoAuth } from "./components/RequAuth";
import PostKatooDetail from "./components/PostKatooDetail";
function App() {
  return (
    <AuthProvider>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="login" element={<NoAuth>
          <Login />
        </NoAuth>}>
        </Route>
        <Route path="register" element={<RegisterPage />}></Route>
        <Route path="post" element={<RequAuth>
          <PostDataPage />
        </RequAuth>}>
        </Route>
        {/* <Route path="post" element={<PostDataPage />}> </Route> */}
        <Route path="katoo/:katooID" element={<PostKatooDetail />}> </Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;

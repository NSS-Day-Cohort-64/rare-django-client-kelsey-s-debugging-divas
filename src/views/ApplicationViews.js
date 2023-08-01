import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { CategoryForm } from "../components/categories/CategoryForm"
import { PostList } from "../components/posts/PostsList"
import PostDetails from "../components/posts/PostDetails"


export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />} />
  
      <Route path="/posts">
        <Route index element={<PostList setToken={setToken} />} />
        <Route path=":postId" element={<PostDetails setToken={setToken} />} />
        <Route path="/posts/create" element={<PostForm setToken={setToken} />} />
      </Route>
  
      <Route path="/categories">
        <Route path='create' element={<CategoryForm setToken={setToken} />}  />
  
      </Route>
    </Routes>
    
  </>
}

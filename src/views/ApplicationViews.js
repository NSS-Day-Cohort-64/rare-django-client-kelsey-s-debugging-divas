import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { CategoryForm } from "../components/categories/CategoryForm"
import { PostList } from "../components/posts/PostsList"
import PostDetails from "../components/posts/PostDetails"
import { TagList } from "../components/tags/TagList"
import { Category } from "../components/categories/Category"
import { PostForm } from "../components/posts/PostForm"
import { UserPosts } from "../components/posts/UserPosts"



export const ApplicationViews = ({ token, setToken }) => {
  return (
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/register" element={<Register setToken={setToken} />} />
      <Route element={<Authorized token={token} />}>
        {/* Nested Routes for Posts */}
        <Route index element={<PostList setToken={setToken} />} />
        <Route path=":postId" element={<PostDetails setToken={setToken} />} />
        <Route path="create" element={<PostForm setToken={setToken} />} />
      </Route>
        <Route path="myPosts" element={<UserPosts token={token} setToken={setToken} />} />

      <Route path="/categories">
        <Route index element={<Category setToken={setToken} />} />
        <Route path="/categories" element={<CategoryForm setToken={setToken} />} />
      </Route>

      <Route path="/tags">
        <Route index element={<TagList setToken={setToken} />} />
      </Route>

    </Routes>
  );
};

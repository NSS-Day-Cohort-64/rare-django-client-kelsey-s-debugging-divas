import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { CategoryForm } from "../components/categories/CategoryForm"

export const ApplicationViews = ({ token, setToken }) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login setToken={setToken} />}  />
      <Route path="/register" element={<Register setToken={setToken} />}  />
      <Route element={<Authorized token={token} />}>
      </Route>
    </Routes>

    <Routes path="/categories">
      <Route path="/categories" element={<CategoryForm setToken={setToken} />}  />
  
    </Routes>

    
  </>
}

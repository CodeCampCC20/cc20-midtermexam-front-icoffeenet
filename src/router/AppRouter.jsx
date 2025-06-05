import { BrowserRouter, Routes,  Route } from "react-router"
import MainLayout from "../Layout/MainLayout"
import LoginPage from "../pages/loginpage"
import RegisterPage from "../pages/RegisterPage"
import Todo from "../pages/TodoPage"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="todo" element={<Todo />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
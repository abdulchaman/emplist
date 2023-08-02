import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import LoginForm from "./components/login/LoginForm";
import RegisterForm from "./components/login/RegisterForm";
import { AuthUseContext } from "./context/authContext";
import EmpList from "./components/emplist/EmpList";
import ProtectedRoute from "./ProtectedRoute";

const Routing = () => {
    return (
        <AuthUseContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main></Main>}>
                        <Route index element={<LoginForm></LoginForm>}></Route>
                        <Route path="register" element={<RegisterForm></RegisterForm>}></Route>
                        <Route path="emplist" element={<ProtectedRoute><EmpList></EmpList></ProtectedRoute>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthUseContext>
    )
};
export default Routing;

import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />}/>
        
      </Routes>      
    </BrowserRouter>
  );
}
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import HomePage from "./pages/HomePage/HomePage";
import NewInPage from "./pages/NewInPage/NewInPage";
import NewOutPage from "./pages/NewOutPage/NewOutPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState({});


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>        
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />}/>
          <Route path="/home" element={<HomePage />}/>
          <Route path="/nova-entrada" element={<NewInPage />}/>
          <Route path="/nova-saida" element={<NewOutPage />}/>
        </Routes>
      </UserContext.Provider>    
    </BrowserRouter>
  );
}
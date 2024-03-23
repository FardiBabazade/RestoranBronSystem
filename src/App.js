import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Admin from "./pages/Admin"
import Order from "./pages/Order";
import Login from './pages/Login';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/admin" element={<Admin />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/order/:id" element={<Order />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import NavBar from './Components/common/NavBar';
import ActionAlerts from "./Components/Alert/Alert";
import { AlertContextProvide } from "./context/AlertContext";

function App() {
  return (
    <>
      <AlertContextProvide>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter >
      </AlertContextProvide>
    </>
  )
}

export default App

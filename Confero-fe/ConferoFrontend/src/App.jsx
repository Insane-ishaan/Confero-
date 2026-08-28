import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/AuthPages/Login";
import Register from "./Pages/AuthPages/Register";
import NavBar from './Components/common/NavBar';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App

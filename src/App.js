import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowUsers from "./components/ShowUsers";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Update from "./components/Update";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/showusers" element={<ShowUsers />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

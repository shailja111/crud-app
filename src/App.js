import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowUsers from "./components/ShowUsers";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Update from "./components/Update";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoutes from "./services/ProtectedRoutes";
import BasicForm from "./pages2/Login2";
import Register2 from "./pages2/Register2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasicForm />} />
          <Route path="/showusers" element={<ShowUsers />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/login2" element={<BasicForm />} />
          <Route path="/" element={<ProtectedRoutes />}>
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/create" element={<Create />} />

            <Route path="/edit/:id" element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

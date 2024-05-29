import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowUsers from "./components/ShowUsers";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/showusers" element={<ShowUsers />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

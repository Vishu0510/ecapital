import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Employees from "./pages/Employees";
import Edit from "./pages/Edit";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Employees />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

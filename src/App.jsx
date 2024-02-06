import "./App.css";
import { Home } from "./components/landing/Home";
import { Routes, Route } from "react-router-dom";
import { FileUpload } from "./components/fileupload/fileupload";
import { Register } from "./components/landing/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />

        <Route path="/fileUpload" element={<FileUpload />} />
      </Routes>
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Curentemployee from "./pages/Curentemployee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Curentemployee" element={<Curentemployee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

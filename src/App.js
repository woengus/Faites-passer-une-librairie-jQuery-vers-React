import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";

const App = () => {
  <BrowserRouter>
    <Routes>
      {console.log("toto")}
      <Route path="/" element={<Home />} />
      <Route path="/employé" element={<List />} />
    </Routes>
  </BrowserRouter>;
};

export default App;

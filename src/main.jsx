import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Nintendo from "./pages/Nintendo.jsx";
import Sony from "./pages/Sony.jsx";
import Microsoft from "./pages/Microsoft.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
      <Route path="/nintendo-consoles" element={<Nintendo/>} />
      <Route path="/sony-consoles" element={<Sony/>} />
      <Route path="/microsoft-consoles" element={<Microsoft/>} />
  </Routes>
  </BrowserRouter>
);
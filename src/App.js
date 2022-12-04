
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {LandingPage ,Dashbroad, ErrorPage, Register } from "./pages/index";

function App() {
  return (
    <BrowserRouter>
      <h1>Job Tracking Application</h1>
      <Routes>
        <Route path="/" element={<Dashbroad />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

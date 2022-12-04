import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, ErrorPage, Register } from "./pages/index";

import {
  Addjob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from "./pages/dashbroad/index.js";
import ProtectedRouter from "./pages/ProtectedRouter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRouter>
              <SharedLayout />
            </ProtectedRouter>
          }
        >
          <Route index element={<Stats />} />
          <Route path="all-jobs" element={<AllJobs />} />
          <Route path="add-job" element={<Addjob />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Customer from "./Pages/Customer";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="customer" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

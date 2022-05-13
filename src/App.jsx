import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import About from "./pages/About/About";
import ProtectedOutlets from "./outlets/ProtectedOutlets";

function App() {
  return (
    <>
      <main className="bg-base-300 min-h-screen">
        <Routes>
          <Route path="/" element={<Login />} />

          {/*  

          This is protected outlet. Outlet is an COMPONENT for nesting rotes 

          under its parent route.        

          */}

          <Route path="/" element={<ProtectedOutlets />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

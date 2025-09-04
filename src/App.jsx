import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home.jsx";
import { Pricing } from "./pages/Pricing.jsx";
import { About } from "./pages/About.jsx";
import { Learn } from "./pages/Learn.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Footer } from "./components/Footer.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </main>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}

export default App;

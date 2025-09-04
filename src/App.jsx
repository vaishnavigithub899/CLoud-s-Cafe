import { Routes, Route } from "react-router-dom";
import './App.css'
import { Home } from "./pages/Home";
import { Pricing } from "./pages/Pricing";
import { About } from "./pages/About";
import { Learn } from "./pages/Learn";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

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

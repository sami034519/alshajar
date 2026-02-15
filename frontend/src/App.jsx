import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import ProductPage from "./products/ProductPage";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./pages/Contact/Contact";
import AboutUs from "./pages/Aboutus/Aboutus";

function App() {
  return (
    <>
      {/* HEADER */}
      <Header />

      {/* PAGES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs/>} />
      </Routes>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default App;

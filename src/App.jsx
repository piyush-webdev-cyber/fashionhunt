import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Equipment from "./Equipments/Equipment";
import Men from "./Men/Men";
import Women from "./Women/Women";
import Child from "./Child/Child";
import ProductPage from "./pages/ProductPage";
import Checkout from "./pages/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import About from "./About";

function App() {
  return (
    <>
      <Header />

      <ScrollToTop />
      {/* MAIN CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/child" element={<Child />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout/" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

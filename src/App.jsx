import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products";
import NavbarList from "./components/NavbarList"; // Import NavbarList only once
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import Context from "./context/Context";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Store from "./pages/Store";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <Context>
      <div className="App">
        {showCart && <Cart cart={setShowCart} />}
        <NavbarList cart={setShowCart}></NavbarList>
        <div className="header">The Generics</div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Context>
  );
}

export default App;

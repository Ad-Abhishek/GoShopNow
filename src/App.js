import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { Product } from "./components/Product";
import ProductScreen from "./screens/ProductScreen";
import { Toaster } from "react-hot-toast";
import CartScreen from "./screens/CartScreen";

function App() {
  return (
    <>
      <Header />
      <Toaster position="top-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart" element={<CartScreen />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;

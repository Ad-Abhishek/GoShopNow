import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import { Product } from "./components/Product";
import ProductScreen from "./components/ProductScreen";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Header />
      <Toaster position="top-right" toastOptions={{duration: 2000}}/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/product/:id" element={<ProductScreen />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

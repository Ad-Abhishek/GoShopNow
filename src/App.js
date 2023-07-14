import { Route, Routes } from "react-router-dom"

import Footer from "./components/Footer";
import Header from "./components/Header";
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";
import { Product } from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;

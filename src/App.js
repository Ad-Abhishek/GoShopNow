import Footer from "./components/Footer";
import Header from "./components/Header";
// import LoginScreen from "./components/LoginScreen";
// import RegisterScreen from "./components/RegisterScreen";
import { Product } from "./components/Product";

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Product />
        {/* <LoginScreen /> */}
        {/* <RegisterScreen /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;

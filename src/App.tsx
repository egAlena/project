// import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";

import Home from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Catalog from "./pages/Catalog.tsx";
import Expenses from "./pages/Expenses.tsx";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/expenses" element={<Expenses />}></Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../server";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";

function App() {
  return (
    <section className="scroller">
      <BrowserRouter>
        <header className=" px-[25%] mt-8 flex justify-between items-center">
          <Link className="font-bold font-serif text-2xl" to="/">
            Van Life
          </Link>
          <nav className="flex justify-between items-center gap-4 font-bold text-xl ">
            <Link className="hover:underline" to="/about">
              About
            </Link>
            <Link className="hover:underline" to="/vans">
              Vans
            </Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<Van />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

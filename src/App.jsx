import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "../server";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Van from "./pages/Van";
import HostLayout from "./pages/Host";
import Layout from "./components/Layout";
import Dashbord from "./pages/Dashbord";
import Income from "./pages/Income";
import HostVans from "./pages/HostVans";
import Reviews from "./pages/Reviews";
import HostVansDetails from "./pages/HostVansDetails";
import VanDetails from "./pages/VanDetails";
import VanPricing from "./pages/VanPricing";
import VanPhotos from "./pages/VanPhotos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashbord />} />
            <Route path="income" element={<Income />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVansDetails />}>
              <Route index element={<VanDetails />}></Route>
              <Route path="pricing" element={<VanPricing />}></Route>
              <Route path="photos" element={<VanPhotos />}></Route>
            </Route>
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingView from "./components/LoadingView.jsx";
import HeaderView from "./components/HeaderView.jsx";
import FooterView from "./components/FooterView.jsx";
import HomeView from "./views/HomeView.jsx";
import CallToActionView from "./components/CalltoActionView.jsx";
import AboutView from "./views/AboutView.jsx";

function App() {
  return (
    <Router>
      {/* <LoadingView /> */}
      <HeaderView />

      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
      </Routes>
      <FooterView />
    </Router>
  );
}

export default App;

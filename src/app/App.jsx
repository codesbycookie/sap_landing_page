import React from "react";
import "./App.css";

import Navbar from "../Components/Navbar";
import AppRoutes from "./AppRoutes";
import Footer from "../Components/Footer";
import ScrollToTop from "./ScrollToTop";
function App() {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
}

export default App;

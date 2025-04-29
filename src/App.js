import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Not from "./page/Not";

import Header from "./section/Header";
import Main from "./section/Main";
import Footer from "./section/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </Main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;

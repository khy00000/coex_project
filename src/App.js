import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home";
import Not from "./page/Not";

import Header from "./section/Header";
import Main from "./section/Main";
import Footer from "./section/Footer";

import Cursor from "./components/Cursor";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Not />} />
        </Route>
      </Routes>
      <Footer />

      <Cursor />
    </BrowserRouter>
  );
};

export default App;

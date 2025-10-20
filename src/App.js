import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./page/Home.jsx";
import Not from "./page/Not.jsx";
import Header from "./section/Header.jsx";
import Main from "./section/Main.jsx";
import Footer from "./section/Footer.jsx";
import Cursor from "./components/Cursor.jsx";

import useFirestore from "./components/useFirestore.jsx";

const COLLECTION_NAMES = ["eventlistData", "mainnewsData"];

const App = () => {
  const { data, loading, error } = useFirestore(COLLECTION_NAMES);

  if (loading) return <div></div>;
  if (error) return <div></div>;

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home data={data} />} />
          <Route path="*" element={<Not />} />
        </Route>
      </Routes>
      <Footer />

      <Cursor />
    </BrowserRouter>
  );
};

export default App;
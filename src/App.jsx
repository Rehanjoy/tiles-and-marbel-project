import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { FirebaseExample } from "./pages/FirebaseExample.jsx";
import { Toaster } from "react-hot-toast";

import ProductDetail from "./pages/ProductDetail.jsx";
import Error404 from "./pages/Error404";
import Banner from "./component/Banner.jsx";

const App = () => {
  return (
    <div className="body-font font-roboto">
      <Toaster position="top-right" reverseOrder={false} />
      <Banner />{" "}
      <Router>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<ProductDetail />} path="/product/:asd" />
          <Route element={<FirebaseExample />} path="/firebaseexample-" />
          <Route element={<Error404 />} path="*" />
        </Routes>
      </Router>{" "}
    </div>
  );
};

export default App;

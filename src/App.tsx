import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Layout from "./layouts/GeneralLayout/GeneralLayout";
import Quiz from "./pages/Quiz/Quiz";
import Result from "./pages/Result/Result";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/quiz/:name"
          element={
            <Layout>
              <Quiz />
            </Layout>
          }
        />
        <Route
          path="/result/:name"
          element={
            <Layout>
              <Result />
            </Layout>
          }
        />
      </Routes>
    </>
  );
}

export default App;

// insert the import modules here
import React from "react";
// import Navbar from "./components/Navbar";
import Nav from "./components/Nav";
import Header from "./components/Header";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Divider from "./components/Divider";


import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <MainSearch />
      <Divider />
      <Quiz />
      <Divider />
      <Footer />
    </>
  );
}

export default App;

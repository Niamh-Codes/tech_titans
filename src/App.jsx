import React from "react";
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
      {/* <DotSlider /> */}
    </>
  );
}

export default App;

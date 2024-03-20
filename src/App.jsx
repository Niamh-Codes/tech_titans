// insert the import modules here
import React from "react";
import Header from "./components/Header";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Divider from "./components/Divider";
// import DotSlider from "./components/DotSlider"


import "./index.css";

function App() {
  return (
    <>
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

// insert the import modules here
import Navbar from "./components/navbar";
// import { motion } from 'framer-motion'; 
import Header from "./components/Header";
import MainSearch from "./components/MainSearch";
import Footer from "./components/Footer";
import Quiz from "./components/Quiz";
import Divider from "./components/Divider";


import "./index.css";

function App() {
  return (
    <>
      <Navbar />
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
